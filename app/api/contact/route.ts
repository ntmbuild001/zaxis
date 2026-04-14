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
  'dirt-work': 'Dirt Work / Underground',
  'other': 'Other',
}

const timelineLabels: { [key: string]: string } = {
  'asap': 'ASAP',
  '1-3-months': '1-3 Months',
  '3-6-months': '3-6 Months',
  'planning': 'Just Planning',
}

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
  console.log('[v0] Contact form API called')
  
  // Check if RESEND_API_KEY is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('[v0] RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Email service not configured. Please contact us via phone: 602-283-8116' },
      { status: 500 }
    )
  }
  
  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try {
    const body: ContactFormData = await request.json()
    console.log('[v0] Received form data:', JSON.stringify(body, null, 2))

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
    console.log('[v0] Attempting to send email via Resend...')
    console.log('[v0] From: Zaxis Contracting <noreply@zaxiscontractingllc.com>')
    console.log('[v0] To: zaxiscontracting@gmail.com')
    
    const response = await resend.emails.send({
      from: 'Zaxis Contracting <noreply@zaxiscontractingllc.com>',
      to: 'zaxiscontracting@gmail.com',
      replyTo: body.email,
      subject: `New Project Inquiry — ${servicesLabel} — ${areaLabel}`,
      html: emailHtml,
    })

    console.log('[v0] Resend response:', JSON.stringify(response, null, 2))

    if (response.error) {
      console.error('[v0] Resend error:', response.error)
      return NextResponse.json(
        { error: 'Failed to send email', details: response.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
