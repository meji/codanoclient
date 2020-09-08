export interface User {
  name?: string
  secondName?: string
  email: string
  boards?: number
  theme?: 'light' | 'dark'
  status?: 'Pending' | 'Active'
  password: string
}
