import { Board } from './board'

export interface BoardRepository {
  findAll(): Promise<{}>
  create(board: Board): Promise<void>
  update(board: Board): Promise<void>
  delete(board: Board): Promise<void>
}
