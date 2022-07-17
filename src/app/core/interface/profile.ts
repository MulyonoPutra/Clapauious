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
