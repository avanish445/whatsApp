export interface User {
  id: number
  name: string
  email: string
  password: string
  image?: string
}

export interface UserState {
  user: User | null
  loading: boolean
  error: string | null
}
