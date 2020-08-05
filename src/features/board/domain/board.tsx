import { Id } from './id'
import { List } from '../../list/domain/list'

export interface Board {
  id: Id
  name: string
  lists: List[]
}
