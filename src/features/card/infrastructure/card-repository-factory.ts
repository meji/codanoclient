import { CardRepository } from '../domain/card-repository'
import { CardHttpRepository } from './card-http-repository'
import { CardDtoToCardMapper } from './card-dto-to-card-mapper'
import { CardToCardDtoMapper } from './card-to-card-dto-mapper'

export class CardRepositoryFactory {
  static build(): CardRepository {
    return new CardHttpRepository(new CardDtoToCardMapper(), new CardToCardDtoMapper())
  }
}
