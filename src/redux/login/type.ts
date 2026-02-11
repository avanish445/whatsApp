export interface User {
  _id: string
  username: string
  token?: string
}

export interface UserState {
  user: User | null
  loading: boolean
  error: string | null
}
