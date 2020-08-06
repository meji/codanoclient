import { listDto } from './list-dto'
import { List } from '../domain/list'

export class ListToListDtoMapper {
  map({ name, id, cards }: List): listDto {
    return {
      name: name,
      _id: id,
      cards: cards
    }
  }
}
