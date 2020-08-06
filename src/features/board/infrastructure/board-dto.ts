import { Id } from '../domain/id'
import { List } from '../../list/domain/list'

export interface boardDto {
  _id: Id
  name: string
  lists: List[]
}
