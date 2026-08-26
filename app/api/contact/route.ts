import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  serviceArea: string
  services: string[]
  timeline: string
  projectDetails: string
}

const serviceAreaLabels: { [key: string]: string } = {
  phoenix: 'Phoenix Valley',
  havasu: 'Lake Havasu City',
}

const serviceLabels: { [key: string]: string } = {
  'remodeling': 'Remodeling',
  'custom-garages': 'Custom Garages',
  'concrete': 'Concrete',
  'patios': 'Patios',
  'dirt-work': 'Dirt Work / Trenches',
  'other': 'Other',
}

const timelineLabels: { [key: string]: string } = {
  'asap': 'ASAP',
  '1-3-months': '1-3 Months',
  '3-6-months': '3-6 Months',
  'planning': 'Just Planning',
}

// Sender and recipient are environment driven on purpose. The sending domain
// must be verified in the Resend account that owns RESEND_API_KEY, so if that
// account ever changes, this has to change with it. Making it an env var means
// that is a dashboard edit rather than a code change and a redeploy.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Zaxis Contracting <noreply@zaxiscontractingllc.com>'
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'zaxiscontracting@gmail.com'

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

export async function POST(request: NextRequest) {
  // Check if RESEND_API_KEY is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set. Submission dropped before send.')
    return NextResponse.json(
      { error: 'Email service not configured. Please contact us via phone: 602-283-8116' },
      { status: 500 }
    )
  }
  
  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceArea || !body.services?.length || !body.timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get human-readable labels
    const areaLabel = serviceAreaLabels[body.serviceArea] || body.serviceArea
    const servicesLabel = body.services
      .map(s => serviceLabels[s] || s)
      .join(', ')
    const timelineLabel = timelineLabels[body.timeline] || body.timeline

    // Format submission timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Phoenix',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    // Create HTML email body
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0A0A0A; margin-bottom: 24px;">New Project Inquiry</h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #666666; margin: 0 0 8px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;">Contact Information</h3>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Name:</strong> ${escapeHtml(body.name)}</p>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h3 style="color: #666666; margin: 0 0 8px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;">Project Details</h3>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Service Area:</strong> ${escapeHtml(areaLabel)}</p>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Services Needed:</strong> ${escapeHtml(servicesLabel)}</p>
          <p style="margin: 0 0 6px 0; color: #0A0A0A;"><strong>Timeline:</strong> ${escapeHtml(timelineLabel)}</p>
        </div>

        ${body.projectDetails ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #666666; margin: 0 0 8px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em;">Additional Details</h3>
            <p style="margin: 0; color: #0A0A0A; white-space: pre-wrap;">${escapeHtml(body.projectDetails)}</p>
          </div>
        ` : ''}

        <div style="margin-top: 24px; padding-top: 16px; border-top: 2px solid #E0E0E0;">
          <p style="margin: 0; color: #999999; font-size: 12px;">Submitted on: ${timestamp} MST</p>
        </div>
      </div>
    `

    // Send email via Resend
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      // resend 3.x (pinned ^3.0.0) expects snake_case here. As `replyTo` this
      // was silently dropped, so replying to an enquiry went to the noreply
      // address instead of the customer.
      reply_to: body.email,
      subject: `New Project Inquiry — ${servicesLabel} — ${areaLabel}`,
      html: emailHtml,
    })

    if (response.error) {
      // Without this the failure is invisible: Vercel records no runtime error
      // for a caught rejection, so a broken inbox looks identical to no traffic.
      // The submitter's details are included so a lost enquiry can still be
      // followed up by hand from the logs.
      console.error('[contact] Resend rejected the send', {
        resendError: response.error,
        from: FROM_EMAIL,
        to: TO_EMAIL,
        submitter: { name: body.name, email: body.email, phone: body.phone },
      })
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('[contact] enquiry sent', { id: response.data?.id, to: TO_EMAIL })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      id: response.data?.id,
    })
  } catch (error) {
    console.error('[contact] unexpected failure handling submission', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
