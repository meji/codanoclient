import { List, NewList } from './list'

export interface ListRepository {
  findAll(inBoard: string): Promise<List[]>
  create(newList: NewList): Promise<List>
  update(list: List): Promise<void>
  delete(list: List): Promise<void>
}
