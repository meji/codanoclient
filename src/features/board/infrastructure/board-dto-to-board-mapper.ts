// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { boardDto } from './board-dto'
import { Board } from '../domain/board'

export class BoardDtoToBoardMapper {
  map(boardDto: boardDto): Board {
    return {
      name: boardDto.name,
      id: boardDto._id,
      lists: boardDto.lists
    }
  }
}
