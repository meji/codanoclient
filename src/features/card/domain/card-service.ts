import { Card } from './card'

export class cardService {
  isCardDuplicated(cards: Card[], cardName: string) {
    return cards.map(card => card.name).includes(cardName)
  }
}
