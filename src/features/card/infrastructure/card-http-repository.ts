import { CardRepository } from '../domain/card-repository'
import { Card, NewCard } from '../domain/card'
import { http, httpForm } from '../../../core/http/http'
import { CardDtoToCardMapper } from './card-dto-to-card-mapper'
import { CardDto } from './card-dto'
import { Id } from '../domain/id'

export class CardHttpRepository implements CardRepository {
  constructor(private readonly cardDtoToCardMapper: CardDtoToCardMapper) {}

  async findAll(inList: string): Promise<Card[]> {
    const response = await http.get<{ cards: CardDto[] }>(`/cards/${inList}`)
    return response.data.cards.map(cardDto => this.cardDtoToCardMapper.map(cardDto))
  }
  async getById(id: Id): Promise<Card> {
    const response = await http.get(`/cards/getById/${id}`)
    return this.cardDtoToCardMapper.map(response.data.card)
  }
  async getByName(name: string): Promise<Card> {
    const response = await http.get(`/cards/getByName/${name}`)
    return this.cardDtoToCardMapper.map(response.data.card)
  }

  async create(card: NewCard): Promise<Card> {
    const response = await http.post('/cards/new', card)
    return this.cardDtoToCardMapper.map(response.data.card)
  }

  async update(card: Card): Promise<Card> {
    const response = await http.put('/cards/update', card)
    return response.data
  }

  async delete(card: Card): Promise<void> {
    await http.delete('/cards/delete/' + card.id)
  }

  async newImg(imageFile: any, id: Id): Promise<string> {
    const formData = new FormData()
    formData.append('imageFile', imageFile)
    const response = await httpForm.post(`/cards/newImg?id=${id}`, formData)
    return response.data.path
  }

  async img(name: string): Promise<any> {
    const response = await http.get<any>(`/cards/img/${name})`)
    return response.data
  }
  async deleteImg(id: Id): Promise<{}> {
    return await http.delete(`/cards/deleteImg/${id}`)
  }
}
