import React, { useEffect, useState } from 'react'
import { User } from '../user/domain/user'
import { UserHttpService } from '../user/infrastructure/userHttpService'
import { AuthManager } from '../auth/auth-manager'

export const UserContext = React.createContext({} as User)

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User)
  const userService = new UserHttpService()
  const authManager = new AuthManager()
  useEffect(() => {
    if (authManager.authToken()) {
      userService
        .getUser()
        .then(response => {
          setUser(response.data)
        })
        .catch(error => {
          console.log(error)
          setUser({} as User)
        })
    }
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
