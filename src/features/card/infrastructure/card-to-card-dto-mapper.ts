import { CardDto } from './card-dto'
import { Card } from '../domain/card'

export class CardToCardDtoMapper {
  map({ name, id, type, description, url, img, inList, createdBy }: Card): CardDto {
    return {
      name: name,
      id: id,
      type: type,
      description: description,
      url: url,
      img: img,
      inList: inList,
      createdBy: createdBy
    }
  }
}
