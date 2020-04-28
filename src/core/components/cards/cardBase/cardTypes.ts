export interface cardType {
  type: 'image' | 'link' | 'code'
  icon: 'id-card' | 'link' | 'code'
}

export const imgType: cardType = { type: 'image', icon: 'id-card' }
export const linkType: cardType = { type: 'link', icon: 'link' }
export const codeType: cardType = { type: 'code', icon: 'code' }
