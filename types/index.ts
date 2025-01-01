export interface Location {
  lat: number
  lng: number
  address: string
}

export interface MeetingSpot {
  id: string
  name: string
  address: string
  location: Location
  rating?: number
  photos?: string[]
  types?: string[]
}

export interface User {
  id: string
  email: string
  location?: Location
} 