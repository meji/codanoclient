import React from 'react'
import { Icon } from './icon'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export default {
  title: 'Light/Icons',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: Icon
}

interface Props {
  icon: IconProp
  size: SizeProp
}
const IconContainer: React.FC<Props> = ({ icon, size }) => {
  return (
    <span className={'light-theme'}>
      <Icon icon={icon} size={size} />
    </span>
  )
}

export const eye = () => <IconContainer icon={'eye'} size={'lg'} />
export const slash = () => <IconContainer icon={'eye-slash'} size={'lg'} />
export const menu = () => <IconContainer icon={'bars'} size={'lg'} />
export const config = () => <IconContainer icon={'user-cog'} size={'lg'} />
export const search = () => <IconContainer icon={'search'} size={'lg'} />
export const code = () => <IconContainer icon={'code'} size={'lg'} />
export const link = () => <IconContainer icon={'link'} size={'lg'} />
export const card = () => <IconContainer icon={'id-card'} size={'lg'} />
export const note = () => <IconContainer icon={'sticky-note'} size={'lg'} />
