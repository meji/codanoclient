import { Board } from './board'

export interface BoardRepository {
  findAll(): Promise<{}>
  create(name: string): Promise<void>
  update(board: Board): Promise<void>
  delete(board: Board): Promise<void>
}
