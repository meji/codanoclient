import { BoardRepository } from '../domain/board-repository'
import { BoardHttpRepository } from './board-http-repository'
import { BoardDtoToBoardMapper } from './board-dto-to-board-mapper'

export class BoardRepositoryFactory {
  static build(): BoardRepository {
    return new BoardHttpRepository(new BoardDtoToBoardMapper())
  }
}
