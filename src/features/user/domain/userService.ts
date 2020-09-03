import { User } from './user'

export interface UserService {
  login(user: User): Promise<{ data: any }>
  signup(user: User): Promise<{ data: any }>
  getUser(): Promise<{ data: any }>
}
