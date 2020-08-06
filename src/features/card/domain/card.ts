import { Id } from './id'

export interface Card {
  id: Id
  name?: string
  type: 'Snippet' | 'Note' | 'Image' | 'Link'
  description?: string | undefined
  url?: string
  img?: string
  inList?: string
  createdBy?: string
}
