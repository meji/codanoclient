import { ListRepository } from '../domain/list-repository'
import { List } from '../domain/list'
import { http } from '../../../core/http/http'

export class ListHttpRepository implements ListRepository {
  async findAll(inBoard: string): Promise<{}> {
    const response = await http.get('/lists?inBoard=' + inBoard)
    return response.data
  }
  async create(name: string): Promise<void> {
    await http.post('/lists/new?name=' + name)
  }

  async update(list: List): Promise<void> {
    await http.post('/lists/update?id=' + list.id + '&&name=' + list.name)
  }

  async delete(list: List): Promise<void> {
    await http.post('/lists/delete', list)
  }
}
