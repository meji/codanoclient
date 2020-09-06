import { CardRepository } from '../domain/card-repository'
import { Card } from '../domain/card'
import { http, httpForm } from '../../../core/http/http'
import { CardDtoToCardMapper } from './card-dto-to-card-mapper'
import { CardDto } from './card-dto'
import { CardToCardDtoMapper } from './card-to-card-dto-mapper'
import { Id } from '../domain/id'

export class CardHttpRepository implements CardRepository {
  constructor(
    private readonly cardDtoToCardMapper: CardDtoToCardMapper,
    private readonly cardToCardDtoMapper: CardToCardDtoMapper
  ) {}

  async findAll(inList: string): Promise<Card[]> {
    const response = await http.get<{ cards: CardDto[] }>(`/cards/${inList}`)
    return response.data.cards.map(cardDto => this.cardDtoToCardMapper.map(cardDto))
  }
  async getById(id: Id): Promise<Card> {
    const response = await http.get<CardDto>(`/cards/getById/${id}`)
    return this.cardDtoToCardMapper.map(response.data)
  }

  async create(card: Card): Promise<Card> {
    const response = await http.post('/cards/new', this.cardToCardDtoMapper.map(card))
    return this.cardDtoToCardMapper.map(response.data.card)
  }

  async update(card: Card): Promise<Card> {
    const response = await http.post('/cards/update', card)
    return response.data
  }

  async delete(card: Card): Promise<void> {
    await http.post('/cards/delete', card)
  }

  async newImg(imageFile: any, id: Id): Promise<string> {
    const formData = new FormData()
    formData.append('imageFile', imageFile[0])
    const response = await httpForm.post(`/cards/newImg?id=${id}`, formData)
    return response.data.path
  }

  async img(name: string): Promise<any> {
    const response = await http.get<any>(`/cards/img/${name})`)
    return response.data
  }
  async deleteImg(id: Id): Promise<{}> {
    return await http.post(`/cards/deleteImg?id=${id}`)
  }
}
