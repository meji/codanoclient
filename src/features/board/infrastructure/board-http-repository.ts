import { BoardRepository } from '../domain/board-repository'
import { Board } from '../domain/board'
import { http } from '../../../core/http/http'

export class BoardHttpRepository implements BoardRepository {
  async findAll(): Promise<{}> {
    const response = await http.get(`/boards`)
    return response.data
  }
  async create(name: string): Promise<void> {
    await http.post('/boards/new?name=' + name)
  }

  async update(board: Board): Promise<void> {
    await http.post('/boards/update?id=' + board.id + '&&name=' + board.name)
  }

  async delete(board: Board): Promise<void> {
    await http.post('/boards/delete', board)
  }
}
