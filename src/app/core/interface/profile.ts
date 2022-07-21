export interface Profile {
  _id: string
  name: string
  email: string
  password?: string
  isAdmin?: boolean
  __v?: number
  createdAt?: string
  updatedAt?: string
}


export interface ProfilePayload {
  _id: string
  name: string
  email: string
  phone: string
  images: string
  address: string
  city: string
  state: string
  country: string
  zipCode: string
  description: string
}


export interface Profiles {
  name: string
  email: string
  phone: string
  images: string
  address: string
  city: string
  state: string
  country: string
  zipCode: string
  description: string
}
