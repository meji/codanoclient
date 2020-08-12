import { listDto } from './list-dto'
import { List } from '../domain/list'

export class ListDtoToListMapper {
  map(listDto: listDto): List {
    return {
      name: listDto.name,
      id: listDto._id,
      inBoard: listDto.inBoard,
      cards: listDto.cards
    }
  }
}
