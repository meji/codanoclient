import { List } from './list'

export interface ListRepository {
  findAll(inBoard: string): Promise<List[]>
  create(list: List): Promise<List>
  update(list: List): Promise<void>
  delete(list: List): Promise<void>
}
