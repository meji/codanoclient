import { Board } from './board'

export interface BoardRepository {
  findAll(): Promise<{}>
  create(name: string): Promise<Board>
  update(board: Board): Promise<void>
  delete(board: Board): Promise<void>
}
