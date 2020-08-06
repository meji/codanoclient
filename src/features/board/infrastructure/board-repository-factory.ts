import { BoardRepository } from '../domain/board-repository'
import { BoardHttpRepository } from './board-http-repository'
import { BoardDtoToBoardMapper } from './board-dto-to-board-mapper'
import { BoardToBoardDtoMapper } from './board-to-board-dto-mapper'

export class BoardRepositoryFactory {
  static build(): BoardRepository {
    return new BoardHttpRepository(new BoardDtoToBoardMapper(), new BoardToBoardDtoMapper())
  }
}
