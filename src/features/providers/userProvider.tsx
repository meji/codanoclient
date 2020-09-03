import React, { useEffect, useState } from 'react'
import { User } from '../user/domain/user'
import { UserHttpService } from '../user/infrastructure/userHttpService'
import { AuthManager } from '../auth/auth-manager'
import { Board } from '../board/domain/board'
import { BoardRepositoryFactory } from '../board/infrastructure/board-repository-factory'
export const UserContext = React.createContext({ boards: [] as Board[], user: {} as User })

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User)
  const [boards, setBoards] = useState([] as Board[])
  const userService = new UserHttpService()
  const authManager = new AuthManager()
  async function fetchBoards() {
    const boardsRepository = BoardRepositoryFactory.build()
    const boards: any = await boardsRepository.findAll()
    setBoards(boards)
  }
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
      fetchBoards()
    }
  }, [])

  return (
    <UserContext.Provider value={{ user: user, boards: boards }}>{children}</UserContext.Provider>
  )
}
