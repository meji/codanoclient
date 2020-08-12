import { Card } from './card'
import { Id } from './id'

export interface CardRepository {
  findAll(): Promise<Card[]>
  getById(id: Id): Promise<Card>
  create(card: Card): Promise<Card>
  update(card: Card): Promise<Card>
  delete(card: Card): Promise<void>
  newImg(imageFile: any, id: Id): Promise<string>
  // img(name: String): Promise<void>
}
