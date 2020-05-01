export interface cardType {
  type: 'image' | 'link' | 'code' | 'note'
  icon: 'id-card' | 'link' | 'code' | 'sticky-note'
}

export const imgType: cardType = { type: 'image', icon: 'id-card' }
export const linkType: cardType = { type: 'link', icon: 'link' }
export const noteType: cardType = { type: 'note', icon: 'sticky-note' }
export const codeType: cardType = { type: 'code', icon: 'code' }
