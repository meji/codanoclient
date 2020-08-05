import { Id } from '../domain/id'

export interface CardDto {
  id: Id
  name: string
  type: 'Snippet' | 'Note' | 'Image' | 'Link'
  description: string
  url: string
  img: string
  inList: string
  createdBy: string
}
