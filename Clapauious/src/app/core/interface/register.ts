export interface Register {
  name: string
  email: string
  password: string
}

export interface RegisterPhoneNumber {
  username: string
  phone: string
  password: string
}

export interface RegisterResponse {
  _id: string
  name: string
  email: string
  isAdmin: boolean
  token: string
}

