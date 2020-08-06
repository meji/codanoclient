import { Id } from './id'
import { CardDto } from '../../card/infrastructure/card-dto'
export interface List {
  id: Id
  name: string
  cards: CardDto[]
}
