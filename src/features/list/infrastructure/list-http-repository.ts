import { ListRepository } from '../domain/list-repository'
import { List } from '../domain/list'
import { http } from '../../../core/http/http'
import { ListDtoToListMapper } from './list-dto-to-list-mapper'
import { ListToListDtoMapper } from './list-to-list-dto-mapper'
import { listDto } from './list-dto'

export class ListHttpRepository implements ListRepository {
  constructor(
    private readonly listDtoToListMapper: ListDtoToListMapper,
    private readonly listToListDtoMapper: ListToListDtoMapper
  ) {}

  async findAll(inBoard: string): Promise<{}> {
    const response = await http.get<{ lists: listDto[] }>('/lists?inBoard=' + inBoard)
    return response.data.lists.map(listDto => this.listDtoToListMapper.map(listDto))
  }
  async create(list: List): Promise<List> {
    const response = await http.post(
      '/lists/new?name=' + list.name + '&inBoard=' + list.inBoard,
      this.listToListDtoMapper.map(list)
    )
    return response.data
  }

  async update(list: List): Promise<void> {
    await http.post('/lists/update?id=' + list.id + '&&name=' + list.name)
  }

  async delete(list: List): Promise<void> {
    await http.post('/lists/delete', list)
  }
}
