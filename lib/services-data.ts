export interface Service {
  id: string
  slug: string
  title: string
  description: string
  image: string
  video?: string
  longDescription: string
  includes: string[]
  whyChoose: string[]
  projectImages: string[]
}

export const services: Service[] = [
  {
    id: 'remodeling',
    slug: 'remodeling',
    title: 'Remodeling',
    description: 'Interior and exterior home remodels',
    image: '/images/service-remodeling.jpg',
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CORONADO%20FINAL%20REVEAL%20%20%281%29-hwfMWku3uchgkrYZdLYraVCSaqBdh7.mp4',
    longDescription:
      'Refresh it or reinvent it. From single room upgrades to full-home transformations, Zaxis delivers interior and exterior remodels with craftsmanship, clear communication, and disciplined project management from start to finish. Our Scottsdale remodel is a great example — a complete interior and exterior transformation that brought new life to the home while maintaining its original character. Updated finishes, improved functionality, and attention to detail created a clean, modern space built to last.',
    includes: [
      'Kitchen and bathroom renovations',
      'Full interior updates and layout changes',
      'Exterior stucco refresh and repairs',
      'Window, door, and flooring replacement',
      'Complete project management and coordination',
      'Every project is unique — we tailor our scope to fit your specific needs.',
    ],
    whyChoose: [
      'Single point of contact — no middlemen',
      'Clear timeline and phased pricing',
      'Clean job sites and professional crews',
      '20+ years of hands-on experience',
    ],
    projectImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02078.JPG-R6zKPXnCXGGb3rGabmVUNLut6uY7Lq.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02059.JPG-bCrsIZK8Ij6WK6bICKCtxGdYRsbaDq.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02062.JPG-BDmUODDGp4MvS7j8dII2CfVDandhLn.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02070.JPG-DXfWFP5LnFUS0JKZF8EhhheCHgnDzd.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02071.JPG-1Bn5VyxAt47wubFUqDNhSRCYt0tttk.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02058.JPG-gnIpVTh29820iTDI3YDupzPoKMe68J.jpeg',
    ],
  },
  {
    id: 'custom-garages',
    slug: 'custom-garages',
    title: 'Custom Garages',
    description: 'Custom garages from foundation to finish',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN7AV0wLoa6d5EfLrVrhwbViT00jUW.png',
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FRAMING%20-%20GILBERT%20GARAGE%20%281%29-YRUmBjWJdwS2cZut7gfJWcQ8OkwUml.mp4',
    longDescription:
      'Built big. Built right. Custom garages engineered for strength, space, and clean design. From foundation to final finishes, we handle every phase. Our Gilbert detached garage project is a perfect example — built from the ground up to add space, utility, and long-term value. Whether you need room for vehicles, toys, or a dedicated workspace, we deliver garages that are built right and built to last.',
    includes: [
      'Standard and detached garages with 14ft+ door clearance',
      'Custom and RV garages with 14ft+ door clearance',
      'Wood framing or block construction',
      'Engineered roof trusses and tile roofing',
      'Electrical / Plumbing / AC as required',
      'Epoxy flooring and insulation options',
      'Every project is unique — we tailor our scope to fit your specific needs.',
    ],
    whyChoose: [
      'Full-scope construction — one contractor, start to finish',
      'Permit and HOA coordination included',
      'Architectural matching to existing home',
      'Heavy-duty construction for Arizona conditions',
    ],
    projectImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garage%20Photo%201%20%281%29-NzFkchJDvBRfrutBmcLsklPzJmPpbn.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7IaAoEvpiEiovSWYJ3LzyvOToyiuQq.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29-3S88qPaKAS2ApNrp4M1UDnNkr6O7HK.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12%20%281%29-hzU2RQHsnxXi2aPv6O0doBiUkpoika.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7%20%281%29-QhxKPmjFdRQFTbFwmkknQehkk6GQej.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4%20%281%29-ng0MvfSJboPkBVgMtLJSqZIo4bULHf.jpg',
    ],
  },
  {
    id: 'concrete',
    slug: 'concrete',
    title: 'Concrete',
    description: 'Driveways, slabs, and foundations',
    image: '/images/service-concrete.jpg',
    video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CONCRETE%20POUR%20%20%281%29-dHHpTnEsxTEiTiqKIZ28IDmkfPgwqD.mp4',
    longDescription:
      'Strength you can build on. From driveways and slabs to patios and custom flatwork, we deliver concrete that\'s built to perform and finished to look sharp. Every project starts with proper preparation and ends with results that hold up over time. Our custom concrete project is a clear example — handled with attention to detail at every stage to ensure durability, clean lines, and a finish that lasts. No shortcuts, just solid work done right.',
    includes: [
      'Driveways, patios, and sidewalks',
      'Garage slabs and foundations',
      'Proper grading and drainage',
      'Reinforcement and expansion joints',
      'Every project is unique — we tailor our scope to fit your specific needs.',
    ],
    whyChoose: [
      'Decades of concrete experience',
      'Premium materials and proper curing',
      'Clean, efficient job sites',
      'Built to last — no shortcuts',
    ],
    projectImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Preferred%20concrete%20photo-8cZeJZ2XU6rRhHKl7OjBodYg90pxdF.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concretefr2-ElWeZoADyLhWpxU7EOJpcEMq11Apa8.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/concretefr-GxJRjxL2hcZyEmIzf0LAdc7On7Cnq6.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Concrete4-A03ghpFELfElbGnVmgPxgxyK8ykDdd.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Concrete5-RRj93mCzUXamqXwlPny9suksclglhD.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Concrete6-qMUleW3kufi5HAMG1x3BzkMh8Vi4rN.jpg',
    ],
  },
  {
    id: 'patios',
    slug: 'patios',
    title: 'Patios',
    description: 'Outdoor living, elevated',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-87dVdDYuCkzj9eboclgUAtPc1m9qD3.png',
    longDescription:
      'Outdoor living, elevated. From simple patio extensions to full backyard builds — patio covers, shade structures, and hardscaping designed to be functional, durable, and built to impress. Whether you\'re creating a space to relax or entertain, we focus on clean design, quality materials, and a finished product that fits your home and lifestyle.',
    includes: [
      'Attached and detached patio covers',
      'Shade structures and pergolas',
      'T&G wood ceiling installations',
      'Integrated lighting and fan prep',
      'Pavers, concrete, and hardscape integration',
      'Every project is unique — we tailor our scope to fit your specific needs.',
    ],
    whyChoose: [
      'Seamless integration with home architecture',
      'Engineered for Arizona heat and monsoons',
      'Quality craftsmanship on every detail',
      'Creates valuable outdoor living space',
    ],
    projectImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patio5%20%281%29-KNXAQHyxPkXel5fQnRU9NuDy737eYu.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patio2-hkttyANpSgvXXWoqWqkrUAveFSiiw5.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PnMr9ibXWEKr78sdVkF7RFWatjURLT.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eVbRqUVHuICWtFVJcimyvbclNRDIZE.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patiofr-PLNmPfFgawW2Zu6y92GUFNsSZokygm.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patio6-YKVCFeHzYvRnI1craJtdbOYKVdAdP9.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R1ScEtauv9t0FvLbJBxtmQCMHU9buH.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patio8-5nooG9qt8Pzj9aR24FBIkPDtJhNg3D.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Patio9-YHH7S5NTcEvEQ7ptkS0bjtAJ6D6th8.jpg',
    ],
  },
  {
    id: 'dirt-work',
    slug: 'dirt-work-underground',
    title: 'Dirt Work / Trenches',
    description: 'Grading, excavation, and utility trenches',
    image: '/images/dirt-work-1.jpg',
    longDescription:
      'Groundwork done right. Grading, excavation, rip rap, and utility trenches handled accurately and efficiently to set your project up for success. From proper drainage solutions to clean, well-planned site work, we focus on creating a solid foundation that supports everything built above it.',
    includes: [
      'Site grading and leveling',
      'Excavation for foundations and footings',
      'Utility trenching (electric, water, gas)',
      'Backfill and compaction',
      'Drainage solutions and site prep',
      'Every project is unique — we tailor our scope to fit your specific needs.',
    ],
    whyChoose: [
      'Accurate to spec — no guesswork',
      'Efficient turnaround times',
      'Proper compaction and drainage',
      'Coordinates with other trades seamlessly',
    ],
    projectImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0369%20%281%29-E80SOX3XOdnGirIjm132lj58LAnAeB.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5556-NAsCnydwgGDdTXswUHCmccAUkKohEy.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0568%20%281%29-ZmhAF0pdBvH91rYH3C4eZxQ1dZRw41.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0570%20%281%29-MViHXr6ETjTYQ97ruHNMCAh142NTWS.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0765%20%281%29-VYpkGOcTnfiFrKQGOjGZQQ99DvRmFH.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0768%20%281%29-RHvgMkgsOw1xOaSeu4DLoPJfdm40Wg.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5800%20%281%29-lZgL9fvIm5cbIw1I0v9QFKy77fTlqz.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5658%20%281%29-PJu6uXEgugA0CmvaxMIVQyVxS1POwM.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5807%20%281%29-kerFloZr71z7ekdhNOmdIBiAR9adCX.jpeg',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
