import { Board } from './board'

export interface BoardRepository {
  findAll(): Promise<Board[]>
  create(name: string): Promise<Board>
  update(board: Board): Promise<void>
  delete(id: string): Promise<void>
}
