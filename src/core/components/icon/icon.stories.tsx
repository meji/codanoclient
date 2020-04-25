import React from 'react'
import { Icon } from './icon'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export default {
  title: 'Icon',
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

const IconContainerDark: React.FC<Props> = ({ icon, size }) => {
  return (
    <span className={'dark-theme'}>
      <Icon icon={icon} size={size} />
    </span>
  )
}
export const eye = () => <IconContainer icon={'eye'} size={'lg'} />
export const slash = () => <IconContainer icon={'eye-slash'} size={'lg'} />
export const menu = () => <IconContainer icon={'bars'} size={'lg'} />
export const config = () => <IconContainer icon={'user-cog'} size={'lg'} />
export const search = () => <IconContainer icon={'search'} size={'lg'} />
export const eyeDark = () => <IconContainerDark icon={'eye'} size={'lg'} />
export const slashDark = () => <IconContainerDark icon={'eye-slash'} size={'lg'} />
export const menuDark = () => <IconContainerDark icon={'bars'} size={'lg'} />
export const configDark = () => <IconContainerDark icon={'user-cog'} size={'lg'} />
export const searchDark = () => <IconContainerDark icon={'search'} size={'lg'} />
