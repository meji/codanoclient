import { CardRepository } from '../domain/card-repository'
import { Card } from '../domain/card'
import { http } from '../../../core/http/http'
import { CardDtoToCardMapper } from './card-dto-to-card-mapper'
import { CardDto } from './card-dto'
import { CardToCardDtoMapper } from './card-to-card-dto-mapper'

export class CardHttpRepository implements CardRepository {
  constructor(
    private readonly cardDtoToCardMapper: CardDtoToCardMapper,
    private readonly cardToCardDtoMapper: CardToCardDtoMapper
  ) {}

  async findAll(): Promise<Card[]> {
    const response = await http.get<CardDto[]>('/cards')
    return response.data.map(cardDto => this.cardDtoToCardMapper.map(cardDto))
  }
  async create(card: Card): Promise<void> {
    await http.post('/cards/new', this.cardToCardDtoMapper.map(card))
  }

  async update(card: Card): Promise<void> {
    await http.post('/cards/update', this.cardToCardDtoMapper.map(card))
  }

  async delete(card: Card): Promise<void> {
    await http.post('/cards/delete', this.cardToCardDtoMapper.map(card))
  }
}
