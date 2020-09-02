import { User } from './user'

export interface LoginService {
  login(user: User): Promise<{ data: any }>
  signup(user: User): Promise<{ data: any }>
}
