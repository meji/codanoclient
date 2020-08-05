import { Id } from './id'
import { Card } from '../../card/domain/card'
export interface List {
  id: Id
  name: string
  cards: Card[]
}
