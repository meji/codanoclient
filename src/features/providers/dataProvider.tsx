import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { User } from '../user/domain/user'
import { UserHttpService } from '../user/infrastructure/userHttpService'
import { AuthManager } from '../auth/auth-manager'
import { Board } from '../board/domain/board'
import { BoardRepositoryFactory } from '../board/infrastructure/board-repository-factory'

interface DataContext {
  boards: Board[]
  user: User
  setBoards: Dispatch<SetStateAction<Board[]>>
  setSelectedBoard: Dispatch<SetStateAction<string>>
}

export const dataContext = React.createContext({} as DataContext)

export const DataProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as User)
  const [boards, setBoards] = useState<Board[]>([] as Board[])
  const [selectedBoard, setSelectedBoard] = useState('')
  const userService = new UserHttpService()
  const authManager = new AuthManager()
  const boardsRepository = BoardRepositoryFactory.build()
  useEffect(() => {
    if (authManager.authToken()) {
      console.log('con token')
      userService
        .getUser()
        .then(response => {
          setUser(response.data)
        })
        .catch(error => {
          console.log(error)
          setUser({} as User)
        })
      boardsRepository.findAll().then(response => {
        setBoards(response)
      })
    }
  }, [])
  const value = { user, boards, setBoards, selectedBoard, setSelectedBoard }
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>
}
