export interface User {
  name?: string
  email: string
  boards?: number
  status?: 'Pending' | 'Active'
  password?: string
}
