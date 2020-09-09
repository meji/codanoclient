import { ListRepository } from '../domain/list-repository'
import { ListHttpRepository } from './list-http-repository'
import { ListDtoToListMapper } from './list-dto-to-list-mapper'

export class ListRepositoryFactory {
  static build(): ListRepository {
    return new ListHttpRepository(new ListDtoToListMapper())
  }
}
