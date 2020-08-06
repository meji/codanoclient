import { List } from './list'

export interface ListRepository {
  findAll(inBoard: string): Promise<{}>
  create(list: List): Promise<void>
  update(list: List): Promise<void>
  delete(list: List): Promise<void>
}
