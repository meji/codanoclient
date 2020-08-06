import { CardDto } from './card-dto'
import { Card } from '../domain/card'

export class CardDtoToCardMapper {
  map(cardDto: CardDto): Card {
    return {
      name: cardDto.name,
      id: cardDto._id,
      type: cardDto.type,
      description: cardDto.description,
      url: cardDto.url,
      img: cardDto.img,
      inList: cardDto.inList,
      createdBy: cardDto.createdBy
    }
  }
}
