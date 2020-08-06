import { List } from './list'

export interface ListRepository {
  findAll(inBoard: string): Promise<{}>
  create(name: string): Promise<void>
  update(board: List): Promise<void>
  delete(board: List): Promise<void>
}
