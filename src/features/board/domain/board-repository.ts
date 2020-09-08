import { Board } from './board'

export interface BoardRepository {
  findAll(): Promise<Board[]>
  create(name: string): Promise<Board>
  update(id: string, name: string): Promise<void>
  delete(id: string): Promise<void>
  getById(id: string): Promise<Board>
}
