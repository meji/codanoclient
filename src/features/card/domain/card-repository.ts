import { Card } from './card'

export interface CardRepository {
  findAll(): Promise<Card[]>
  create(card: Card): Promise<void>
  update(card: Card): Promise<void>
  delete(card: Card): Promise<void>
}
