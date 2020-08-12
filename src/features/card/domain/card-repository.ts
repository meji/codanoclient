import { Card } from './card'
import { Id } from './id'

export interface CardRepository {
  findAll(): Promise<Card[]>
  getById(id: Id): Promise<Card>
  create(card: Card): Promise<void>
  update(card: Card): Promise<void>
  delete(card: Card): Promise<void>
  newImg(imageFile: any, id: Id): Promise<void>
  // img(name: String): Promise<void>
}
