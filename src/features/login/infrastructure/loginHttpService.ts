import { http } from '../../../core/http/http'
import { LoginService } from '../domain/loginService'
import { User } from '../domain/user'

export class LoginHttpService implements LoginService {
  async login(user: User): Promise<{ data: any }> {
    return await http.post('/auth/login', user)
  }
  async signup(user: User): Promise<{ data: any }> {
    return await http.post('/auth/signup', user)
  }
}
