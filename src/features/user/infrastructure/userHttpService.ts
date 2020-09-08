import { http } from '../../../core/http/http'
import { UserService } from '../domain/userService'
import { User } from '../domain/user'

export class UserHttpService implements UserService {
  async login(user: User): Promise<{ data: any }> {
    return await http.post('/auth/login', user)
  }
  async signup(user: User): Promise<{ data: any }> {
    return await http.post('/auth/signup', user)
  }
  async getUser(): Promise<{ data: any }> {
    return await http.get('/user')
  }
  async upDateUser(user: User): Promise<{ user: User }> {
    return await http.post('/user/update', user)
  }
}
