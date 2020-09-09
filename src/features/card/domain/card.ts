import { Id } from './id'

export interface Card {
  id: Id
  name?: string
  type: 'Snippet' | 'Note' | 'Image' | 'Link'
  description?: string | undefined
  url?: string
  img?: string
  imageFile?: any
  inList?: string
  createdBy?: string
}

export interface NewCard {
  name?: string
  type: 'Snippet' | 'Note' | 'Image' | 'Link'
  inList?: string
  url?: string
}
