export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}
