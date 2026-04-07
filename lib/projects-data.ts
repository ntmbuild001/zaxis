export interface ProjectData {
  id: number
  slug: string
  type: string
  title: string
  location: string
  description: string
  challenge: string
  solution: string
  year: string
  duration: string
  sqft: string
  image?: string
  specs: { label: string; value: string }[]
  photos: { caption: string; image?: string; type?: string; url?: string }[]
  videos?: { url: string; caption: string }[]
  process: { title: string; description: string }[]
  stats: { value: number; suffix: string; label: string }[]
  featured?: boolean
}

// 4 Featured Projects from client submissions
export const featuredProjects: ProjectData[] = [
  {
    id: 1,
    slug: 'scottsdale-home-remodel',
    type: 'Remodeling',
    title: 'Scottsdale Home Remodel',
    location: 'Scottsdale, AZ',
    description:
      'This Scottsdale home received a full interior and exterior renovation, turning an outdated space into a clean, modern home built for everyday living. Updated spaces, refined finishes, and improved functionality brought the property together while maintaining the character of the neighborhood.',
    challenge:
      'We approached the project in phases, starting with structural improvements and working outward. New windows, updated electrical, modern interior finishes, and a full exterior refresh — including stucco, paint, and landscaping — created a cohesive, finished space.',
    solution:
      'The result is a home that not only looks updated, but functions better and is built to last.',
    year: '2024',
    duration: '12 Weeks',
    sqft: '2,400',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02059%20%281%29.JPG-v8NQjXFvn47dTz0NzLPqhzg5jKHjQO.jpeg',
    featured: true,
    specs: [
      { label: 'Scope', value: 'Full Interior & Exterior' },
      { label: 'Kitchen', value: 'Complete Remodel' },
      { label: 'Bathrooms', value: '2 Updated' },
      { label: 'Exterior', value: 'New Stucco & Paint' },
      { label: 'Windows', value: 'All Replaced' },
    ],
    photos: [
      { caption: 'Before - Living Room', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07895.JPG-0oxhtGy0iHfZjRAX6spoKI5j5ohMab.jpeg' },
      { caption: 'Demo Day - Kitchen Tearout', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07894.JPG-xkFQmFjxLt1ES4LBI7LaYkNzrckBdV.jpeg' },
      { caption: 'Before - Hallway & Stairs', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07892.JPG-RWVydf8E0kRvlpJtosMjKG9GuenFud.jpeg' },
      { caption: 'Before - Backyard Patio', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07899.JPG-k0S5oPYMfksQesQnyAK1xZCtjpKF1S.jpeg' },
      { caption: 'After - Living Room with Fireplace', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02059%20%281%29.JPG-v8NQjXFvn47dTz0NzLPqhzg5jKHjQO.jpeg' },
      { caption: 'After - Entry Hall & Floating Staircase', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02062%20%281%29.JPG-q2T7YD9GVj6JgKeei8FAG5wvEzBJwF.jpeg' },
      { caption: 'After - Kitchen with Farmhouse Sink', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02080.JPG-ZkJx9QLqfWtg8h87VzdhT8OpThbqVS.jpeg' },
      { caption: 'After - Master Bath Double Vanity', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02070%20%281%29.JPG-uFyDzXnd4wp7IOgTi3udppMi1CsnBS.jpeg' },
      { caption: 'After - Tiled Shower with Glass Door', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02071.JPG-KUOs5iIZlidOgoKDVDQoxtJPyS2FiH.jpeg' },
      { caption: 'After - Landscaped Courtyard', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02057.JPG-K12B1L4BgDsEGcFYhH5IFRkXhl0BKV.jpeg' },
    ],
    process: [
      { title: 'Planning & Permits', description: 'Developed comprehensive renovation plan and obtained all necessary permits.' },
      { title: 'Demolition', description: 'Strategic demo of interior finishes and damaged exterior elements.' },
      { title: 'Structural & Systems', description: 'Updated electrical, plumbing, and addressed any structural issues.' },
      { title: 'Interior Buildout', description: 'New drywall, flooring, cabinetry, fixtures, and finishes throughout.' },
      { title: 'Exterior Refresh', description: 'New stucco, paint, windows, and landscaping for complete transformation.' },
    ],
    stats: [
      { value: 2400, suffix: ' sq ft', label: 'Renovated' },
      { value: 12, suffix: ' Weeks', label: 'Completed In' },
      { value: 3, suffix: '', label: 'Bathrooms Updated' },
      { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ],
  },
  {
    id: 2,
    slug: 'custom-garage-gilbert',
    type: 'Garages',
    title: 'Custom Detached Garage',
    location: 'Gilbert, AZ',
    description:
      'Built for function, space, and clean craftsmanship. This custom detached garage in Gilbert was designed and built to match the existing property while adding serious storage and workspace. Clean lines, thoughtful layout, and quality construction made it feel like a natural extension of the home.',
    challenge:
      'Limited backyard access created constraints for equipment and material delivery. The structure also needed to meet setback requirements while maximizing interior space and matching the home\'s existing architecture.',
    solution:
      'We developed a plan that met all city setback requirements while making the most of the available space. Material staging and construction were carefully coordinated to work within the limited access. From foundation to final framing and finishes, the project showcases the structural integrity and attention to detail that define our builds. The result is a fully functional garage that adds space, value, and blends seamlessly with the property.',
    year: '2024',
    duration: '5 Weeks',
    sqft: '576',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0380%20%281%29.JPG-kIihjjNKxbIMDo4FRzAc1vEAiOUSBR.jpeg',
    featured: true,
    specs: [
      { label: 'Size', value: '30 ft x 40 ft' },
      { label: 'Walls', value: 'Wood Framed with T-111 Siding' },
      { label: 'Roof', value: 'Eng Trusses with Shingles' },
      { label: 'Floor', value: 'Light Broom Finished Concrete' },
    ],
    photos: [
      { caption: 'Foundation Pour - Crew at Work', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gilbert%20concrete2%20%282%29.JPG-G3Ow2nA4Sb8vbFdYxeLL8RPpaz0gC4.jpeg' },
      { caption: 'Aerial - Crane Setting Roof Trusses', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0380%20%281%29.JPG-kIihjjNKxbIMDo4FRzAc1vEAiOUSBR.jpeg' },
    ],
    videos: [
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CONCRETE%20POUR%20%20%281%29-dHHpTnEsxTEiTiqKIZ28IDmkfPgwqD.mp4', caption: 'Concrete Pour' },
      { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FRAMING%20-%20GILBERT%20GARAGE%20%281%29-YRUmBjWJdwS2cZut7gfJWcQ8OkwUml.mp4', caption: 'Framing & Trusses' },
    ],
    process: [
      { title: 'Permits & Engineering', description: 'Obtained building permit with engineered plans.' },
      { title: 'Foundation & Slab', description: 'Poured thickened-edge slab with embedded anchor bolts.' },
      { title: 'Wood Framing & Roof', description: 'Erected wood framed walls, set engineered trusses, and installed shingle roofing.' },
      { title: 'Siding & Finish', description: 'Installed T-111 siding, painted to match home, broom finished floor, installed doors.' },
    ],
    stats: [
      { value: 576, suffix: ' sq ft', label: 'Total Area' },
      { value: 5, suffix: ' Weeks', label: 'Completed In' },
      { value: 2, suffix: ' Cars', label: 'Capacity' },
      { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ],
  },
  {
    id: 3,
    slug: 'exterior-remodel-rv-garage-addition',
    type: 'Remodeling',
    title: 'Exterior Remodel with Attached RV Garage Addition',
    location: 'Lake Havasu City, AZ',
    description:
      'Built for strength, space, and seamless integration. This exterior remodel in Lake Havasu included a custom attached RV garage addition designed to handle size, height, and everyday use. The structure was built to match the existing home while adding functional space and long-term value.',
    challenge:
      'Building an attached RV garage requires precise structural planning due to height and clearance demands. The project also needed to perform in Lake Havasu\'s extreme heat while maintaining a cohesive look with the existing home.',
    solution:
      'We engineered the structure to meet both performance and design standards. 2x6 framing, foam insulation, upgraded LED lighting, synthetic stucco, and insulated garage doors were all selected to handle heat, durability, and long-term use. The addition blends seamlessly with the home while providing the space and functionality needed for a full-size RV.',
    year: '2024',
    duration: '8 Weeks',
    sqft: '1,210',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-JlrArCvLSwExymrUIa0fIcwDSah6Ic.jpg',
    featured: true,
    specs: [
      { label: 'Size', value: '55 ft x 22 ft' },
      { label: 'Walls', value: 'Wood Framed with Stucco' },
      { label: 'Roof', value: 'Foam with Elastomeric Coating' },
      { label: 'Electrical', value: '200A Panel, 50A RV Outlet' },
    ],
    photos: [
      { caption: 'Exterior Remodel - Roof Deck Framing', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-30-25%202-Uu5R4cepQyClm8P4WS4K9Su4rvwdHu.jpg' },
      { caption: 'Spray Foam Insulation', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20%284%29-E12fh3OcQng1GFxZsQ0ZyuL8ntSxtu.jpg' },
      { caption: 'RV Bay Framing & HVAC', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-jQW4H1VSdgtve6pQhEWXuLZf2B6Ikk.jpg' },
      { caption: 'HVAC Ducting Install', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-woco4ByGW5hlccHCfoxYPioJVY55QE.jpg' },
      { caption: 'Finishing Stamped Concrete Driveway', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20%281%29-7XQl4imNHDKFRSRGdaWPOOc4uyJaOY.jpg' },
      { caption: 'Interior - Garage Bay with Framing', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%281%29-DQ6oXzrkgvqooalyIpixJZp0rNRg11.jpg' },
      { caption: 'Finished Garage Bay Interior', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27%20%281%29-zsEjkBUeoileX7cOsmhINlDdBeQ7sF.jpg' },
      { caption: 'Completed - Triple Garage Exterior', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-JlrArCvLSwExymrUIa0fIcwDSah6Ic.jpg' },
    ],
    process: [
      { title: 'Engineering & Permits', description: 'Custom structural engineering for RV-height requirements and city permits.' },
      { title: 'Foundation', description: 'Heavy-duty slab foundation with thickened edges for CMU wall loads.' },
      { title: 'Block Construction', description: 'CMU walls with grouted cores and bond beams for structural integrity.' },
      { title: 'Roof & Ceiling', description: 'Engineered trusses, roofing, and tongue-and-groove wood ceiling.' },
      { title: 'Finishing', description: 'Stucco exterior, garage door, electrical, and final details.' },
    ],
    stats: [
      { value: 1200, suffix: ' sq ft', label: 'Total Area' },
      { value: 8, suffix: ' Weeks', label: 'Completed In' },
      { value: 14, suffix: ' ft', label: 'Door Clearance' },
      { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ],
  },
  {
    id: 4,
    slug: 'mesa-home-base',
    type: 'Commercial',
    title: 'Mesa Home Base',
    location: 'Mesa, AZ',
    description:
      'Building our future — from the ground up. This Mesa property is being transformed into Zaxis Contracting\'s main headquarters and working compound. What started as a house is becoming the home base for our team, equipment, and continued growth — designed to support both daily operations and what\'s ahead.',
    challenge:
      'The goal is to rework the existing structure into a space that functions for the business while still maintaining a clean, residential feel. Thoughtful planning and phased renovations allow us to maximize the property without overbuilding, creating a layout that works as hard as we do.',
    solution:
      'We\'re approaching this project the same way we approach every job — with quality craftsmanship, clear execution, and attention to detail at every stage. This space is being built to reflect who we are and how we operate. The project kicked off with our entire crew — families included — marking the start of something we\'re incredibly proud of.',
    year: '2024',
    duration: 'Ongoing',
    sqft: '3,200',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00025.JPG-WJZiQQHPSMFX2EwpyM3YzQ4ZED1GB8.jpeg',
    featured: true,
    specs: [
      { label: 'Type', value: 'Headquarters & Compound' },
      { label: 'Focus', value: 'Operations & Growth' },
      { label: 'Approach', value: 'Phased Renovation' },
    ],
    photos: [
      { caption: 'Project Video', type: 'youtube', url: 'https://www.youtube.com/embed/bTNFRJz_x7s' },
      { caption: 'Street View - Before', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00025.JPG-WJZiQQHPSMFX2EwpyM3YzQ4ZED1GB8.jpeg' },
      { caption: 'Old Garage Structure', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00077.JPG-cxU7MbKbSrRwuwav1YmPRgNx99NYLt.jpeg' },
      { caption: 'Aerial View - Property Overview', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20250623090143_0726_D.JPG-V4rJ5Vznnoed3h0cI1VoKXEPar0Neo.jpeg' },
      { caption: 'Interior Demolition - Wall Removal', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00014.JPG-PQJ0w6sRjTVUsslKf8CTrG5QuFHA9I.jpeg' },
      { caption: 'Large Space Demolition Phase', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00019.JPG-0JNCclNdonlidxOpBooabZABSBpYce.jpeg' },
      { caption: 'Hallway Renovation In Progress', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00015.JPG-msHwvnPE0TLVYZW6GnEVSfIQJhxOuu.jpeg' },
      { caption: 'Major Space Framing & Layout', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00021.JPG-8L8ZkMtr1j2A6LttqVg7XsKdJE5TCd.jpeg' },
      { caption: 'Exterior Demolition Area', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00023.JPG-eSswq08sdnYNdUph7zZibWO2ykyr0Z.jpeg' },
      { caption: 'Interior Room Demo & Framing', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00016.JPG-6nP0tKwnCd2dVdPks3605fOB7Se46E.jpeg' },
    ],
    process: [
      { title: 'Planning', description: 'Designed layout to support operations and team.' },
      { title: 'Renovation', description: 'Phased improvements to maximize functionality.' },
      { title: 'Buildout', description: 'Custom spaces for office, storage, and operations.' },
    ],
    stats: [
      { value: 20, suffix: '+', label: 'Years Experience' },
      { value: 500, suffix: '+', label: 'Projects Completed' },
      { value: 100, suffix: '%', label: 'Team Commitment' },
    ],
  },
]

// Additional gallery projects
export const galleryProjects: ProjectData[] = [
  {
    id: 5,
    slug: 'residential-driveway-havasu',
    type: 'Concrete',
    title: 'Residential Driveway',
    location: 'Lake Havasu City, AZ',
    description: 'Complete driveway replacement with stamped decorative concrete.',
    challenge: 'Existing driveway had severe cracking due to improper base preparation.',
    solution: 'Removed old slab, re-graded subbase, installed expansion joints, poured 4-inch reinforced slab with stamped finish.',
    year: '2024',
    duration: '10 Days',
    sqft: '1,200',
    specs: [
      { label: 'Concrete Type', value: '4,000 PSI Stamped' },
      { label: 'Thickness', value: '4 inches' },
      { label: 'Reinforcement', value: 'Fiber Mesh + Rebar' },
    ],
    photos: [{ caption: 'Before' }, { caption: 'During' }, { caption: 'After' }],
    process: [
      { title: 'Demolition', description: 'Removed 1,200 sq ft of damaged concrete.' },
      { title: 'Pour & Stamp', description: 'Poured and stamped with Ashlar Slate pattern.' },
    ],
    stats: [
      { value: 1200, suffix: ' sq ft', label: 'Poured' },
      { value: 10, suffix: ' Days', label: 'Completed' },
    ],
  },
  {
    id: 6,
    slug: 'privacy-wall-phoenix',
    type: 'Block Walls',
    title: 'Privacy Wall & Gate',
    location: 'Phoenix, AZ',
    description: 'Custom 6-foot CMU block wall with decorative cap and wrought-iron gate.',
    challenge: 'Uneven lot with a 3-foot grade change across the wall line.',
    solution: 'Designed stepped footing system while maintaining level wall cap.',
    year: '2024',
    duration: '14 Days',
    sqft: '800',
    specs: [
      { label: 'Wall Height', value: '6 feet' },
      { label: 'Block Type', value: '8x8x16 CMU' },
      { label: 'Finish', value: 'Smooth Stucco' },
    ],
    photos: [{ caption: 'Footing' }, { caption: 'Block laying' }, { caption: 'Completed' }],
    process: [
      { title: 'Excavation', description: 'Marked wall line, excavated stepped footing trench.' },
      { title: 'Construction', description: 'Laid CMU blocks with grouted cores.' },
    ],
    stats: [
      { value: 120, suffix: ' ft', label: 'Linear Feet' },
      { value: 14, suffix: ' Days', label: 'Completed' },
    ],
  },
  {
    id: 7,
    slug: 'pool-deck-expansion',
    type: 'Concrete',
    title: 'Pool Deck Expansion',
    location: 'Lake Havasu City, AZ',
    description: 'Extended existing pool deck by 600 square feet with cool-deck finish.',
    challenge: 'New deck needed to match existing 8-year-old cool-deck texture and color.',
    solution: 'Sourced custom color-matched cool-deck coating with test patch approval.',
    year: '2024',
    duration: '12 Days',
    sqft: '600',
    specs: [
      { label: 'Concrete Type', value: '3,500 PSI with Cool-Deck' },
      { label: 'Finish', value: 'Knockdown Cool-Deck' },
    ],
    photos: [{ caption: 'Before' }, { caption: 'During pour' }, { caption: 'Finished' }],
    process: [
      { title: 'Site Prep', description: 'Careful excavation around pool plumbing.' },
      { title: 'Color Match', description: 'Applied custom-mixed color coat.' },
    ],
    stats: [
      { value: 600, suffix: ' sq ft', label: 'Deck Added' },
      { value: 30, suffix: '\u00B0F', label: 'Cooler Surface' },
    ],
  },
  {
    id: 8,
    slug: 'retaining-wall-mesa',
    type: 'Block Walls',
    title: 'Retaining Wall System',
    location: 'Mesa, AZ',
    description: 'Engineered retaining wall system for significant grade change between properties.',
    challenge: '4-foot grade change causing soil erosion and water runoff.',
    solution: 'Fully engineered wall with French drain system to manage hydrostatic pressure.',
    year: '2024',
    duration: '18 Days',
    sqft: '800',
    specs: [
      { label: 'Wall Height', value: '4 feet' },
      { label: 'Length', value: '200 linear feet' },
      { label: 'Drainage', value: 'French Drain + Weep Holes' },
    ],
    photos: [{ caption: 'Erosion damage' }, { caption: 'Construction' }, { caption: 'Completed' }],
    process: [
      { title: 'Engineering', description: 'Created engineered plans for lateral loads.' },
      { title: 'Drainage', description: 'Installed French drain system.' },
    ],
    stats: [
      { value: 200, suffix: ' ft', label: 'Linear Feet' },
      { value: 4, suffix: ' ft', label: 'Wall Height' },
    ],
  },
  {
    id: 9,
    slug: 'stamped-concrete-patio',
    type: 'Concrete',
    title: 'Decorative Stamped Patio',
    location: 'Scottsdale, AZ',
    description: 'Decorative stamped concrete patio with green diamond pattern inlay.',
    challenge: 'Complex pattern requiring precise timing during pour.',
    solution: 'Expert stamping technique with color hardener application.',
    year: '2024',
    duration: '8 Days',
    sqft: '450',
    specs: [
      { label: 'Pattern', value: 'Diamond Inlay' },
      { label: 'Color', value: 'Desert Tan with Green Accent' },
    ],
    photos: [{ caption: 'Pattern layout' }, { caption: 'Stamping' }, { caption: 'Finished' }],
    process: [
      { title: 'Design', description: 'Created custom pattern layout.' },
      { title: 'Execution', description: 'Stamped with precision timing.' },
    ],
    stats: [
      { value: 450, suffix: ' sq ft', label: 'Stamped Area' },
      { value: 8, suffix: ' Days', label: 'Completed' },
    ],
  },
  {
    id: 10,
    slug: 'patio-cover-tg-ceiling',
    type: 'Patio Covers',
    title: 'T&G Wood Ceiling Patio',
    location: 'Lake Havasu City, AZ',
    description: 'Patio cover with exposed tongue-and-groove wood ceiling for premium aesthetic.',
    challenge: 'Wood ceiling in desert climate requires proper ventilation.',
    solution: 'Engineered ventilation system with sealed T&G panels.',
    year: '2024',
    duration: '3 Weeks',
    sqft: '350',
    specs: [
      { label: 'Ceiling', value: 'T&G Cedar' },
      { label: 'Structure', value: 'Steel Frame' },
    ],
    photos: [{ caption: 'Frame install' }, { caption: 'T&G ceiling' }, { caption: 'Finished' }],
    process: [
      { title: 'Structure', description: 'Installed steel frame with proper slope.' },
      { title: 'Ceiling', description: 'Applied sealed T&G cedar panels.' },
    ],
    stats: [
      { value: 350, suffix: ' sq ft', label: 'Covered Area' },
      { value: 3, suffix: ' Weeks', label: 'Completed' },
    ],
  },
]

// Combined list for display
export const allProjects: ProjectData[] = [...featuredProjects, ...galleryProjects.filter((p) => p.id < 5)]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return allProjects.find((p) => p.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 3): ProjectData[] {
  const current = getProjectBySlug(currentSlug)
  if (!current) return allProjects.slice(0, limit)
  return allProjects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      if (a.type === current.type && b.type !== current.type) return -1
      if (a.type !== current.type && b.type === current.type) return 1
      return 0
    })
    .slice(0, limit)
}
