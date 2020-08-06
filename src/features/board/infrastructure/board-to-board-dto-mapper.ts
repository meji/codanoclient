import { boardDto } from './board-dto'
import { Board } from '../domain/board'

export class BoardToBoardDtoMapper {
  map({ name, id, lists }: Board): boardDto {
    return {
      name: name,
      _id: id,
      lists: lists
    }
  }
}
