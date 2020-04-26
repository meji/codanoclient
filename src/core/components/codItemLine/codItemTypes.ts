export interface codItemType {
  type: 'card' | 'link' | 'code'
  icon: 'id-card' | 'link' | 'code'
}
export const cardType: codItemType = { type: 'card', icon: 'id-card' }
export const linkType: codItemType = { type: 'link', icon: 'link' }
export const codeType: codItemType = { type: 'code', icon: 'code' }
