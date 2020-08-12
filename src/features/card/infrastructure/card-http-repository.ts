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

  async findAll(): Promise<Card[]> {
    const response = await http.get<CardDto[]>('/cards')
    return response.data.map(cardDto => this.cardDtoToCardMapper.map(cardDto))
  }

  async getById(id: Id): Promise<Card> {
    const response = await http.get<CardDto>(`/cards/getById/${id}`)
    return this.cardDtoToCardMapper.map(response.data)
  }

  async create(card: Card): Promise<void> {
    await http.post('/cards/new', this.cardToCardDtoMapper.map(card))
  }

  async update(card: Card): Promise<void> {
    await http.post('/cards/update', card)
  }

  async delete(card: Card): Promise<void> {
    await http.post('/cards/delete', this.cardToCardDtoMapper.map(card))
  }

  async newImg(imageFile: any, id: Id): Promise<void> {
    const formData = new FormData()
    console.log('imageFile', imageFile)
    formData.append('imageFile', imageFile[0])
    await httpForm.post(`/cards/newImg?id=${id}`, formData)
  }

  // async img(name: string): Promise<any> {
  //   const response = await http.get<any>(`/cards/img/${name})`)
  //   return response.data
  // }
}
