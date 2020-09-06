export interface cardType {
  type: 'Image' | 'Link' | 'Snippet' | 'Note'
  icon: 'id-card' | 'link' | 'code' | 'sticky-note'
}

export const imgType: cardType = { type: 'Image', icon: 'id-card' }
export const linkType: cardType = { type: 'Link', icon: 'link' }
export const noteType: cardType = { type: 'Note', icon: 'sticky-note' }
export const codeType: cardType = { type: 'Snippet', icon: 'code' }
