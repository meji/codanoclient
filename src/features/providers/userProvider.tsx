import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { User } from '../user/domain/user'
import { UserHttpService } from '../user/infrastructure/userHttpService'
import { AuthManager } from '../auth/auth-manager'
import { Board } from '../board/domain/board'

interface IsUserContext {
  boards: Board[]
  user: User
  setBoards: Dispatch<SetStateAction<Board[]>>
}

export const UserContext = React.createContext({} as IsUserContext)

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User)
  const [boards, setBoards] = useState<Board[]>([] as Board[])
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
  const value = { user, boards, setBoards }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
