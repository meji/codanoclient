import { Id } from './id'
import { CardDto } from '../../card/infrastructure/card-dto'
export interface List {
  id: Id
  name: string
  inBoard: string
  cards?: CardDto[]
}
export interface ListIn {
  id: Id
  name: string
  inBoard: string
  cards: CardDto[]
}

export interface NewList {
  name: string
  inBoard: string
}
