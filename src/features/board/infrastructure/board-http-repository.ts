import { BoardRepository } from '../domain/board-repository'
import { Board } from '../domain/board'
import { http } from '../../../core/http/http'
import { boardDto } from './board-dto'
import { BoardDtoToBoardMapper } from './board-dto-to-board-mapper'
// import { BoardToBoardDtoMapper } from './board-to-board-dto-mapper'

export class BoardHttpRepository implements BoardRepository {
  constructor(
    private readonly boardDtoToBoardMapper: BoardDtoToBoardMapper // private readonly boardToBoardDtoMapper: BoardToBoardDtoMapper
  ) {}

  async findAll(): Promise<Board[]> {
    const response = await http.get<{ boards: boardDto[] }>(`/boards`)
    return response.data.boards.map(boardDto => this.boardDtoToBoardMapper.map(boardDto))
  }
  async create(name: string): Promise<Board> {
    const response = await http.post('/boards/new?name=' + name)
    return this.boardDtoToBoardMapper.map(response.data.board)
  }

  async update(board: Board): Promise<void> {
    await http.post('/boards/update?id=' + board.id + '&&name=' + board.name)
  }

  async delete(id: string): Promise<void> {
    await http.post('/boards/delete?id=' + id)
  }
}
