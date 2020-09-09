import { ListRepository } from '../domain/list-repository'
import { List, NewList } from '../domain/list'
import { http } from '../../../core/http/http'
import { ListDtoToListMapper } from './list-dto-to-list-mapper'
import { listDto } from './list-dto'

export class ListHttpRepository implements ListRepository {
  constructor(private readonly listDtoToListMapper: ListDtoToListMapper) {}

  async findAll(inBoard: string): Promise<List[]> {
    const response = await http.get<{ lists: listDto[] }>('/lists/' + inBoard)
    return response.data.lists.map(listDto => this.listDtoToListMapper.map(listDto))
  }
  async create(newlist: NewList): Promise<List> {
    const response = await http.post(
      '/lists/new?name=' + newlist.name + '&inBoard=' + newlist.inBoard
    )
    return response.data
  }

  async update(list: List): Promise<void> {
    await http.put('/lists/update', list)
  }

  async delete(list: List): Promise<void> {
    await http.delete('/lists/delete/' + list.id)
  }
}
