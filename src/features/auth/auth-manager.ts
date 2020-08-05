export class AuthManager {
  authToken() {
    return localStorage.getItem('access_token')
  }
}
