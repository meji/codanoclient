import { Card, NewCard } from './card'
import { Id } from './id'

export interface CardRepository {
  findAll(inList: string): Promise<Card[]>
  getById(id: Id): Promise<Card>
  getByName(name: string): Promise<Card>
  create(card: NewCard): Promise<Card>
  update(card: Card): Promise<Card>
  delete(card: Card): Promise<void>
  newImg(imageFile: any, id?: Id): Promise<string>
  deleteImg(id: Id): Promise<{}>
  // img(name: String): Promise<void>
}
