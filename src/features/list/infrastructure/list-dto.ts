import { Id } from '../domain/id'
import { CardDto } from '../../card/infrastructure/card-dto'

export interface listDto {
  _id: Id
  name: string
  inBoard: string
  cards?: CardDto[]
}
