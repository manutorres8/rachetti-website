export interface TeamMember {
  id: string
  name: string
  role: string
  specialty: string
  email: string
  linkedin: string
  image: string
  description: string
}

export interface NewsItem {
  id: string
  date: string
  title: string
  excerpt: string
  content: string
  image?: string
  relatedTeamMember?: string
}

export interface Service {
  title: string
  description: string
  icon?: string
}
