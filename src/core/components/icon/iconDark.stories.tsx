import React from 'react'
import { Icon } from './icon'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

export default {
  title: 'Dark/Icons',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: Icon
}

interface Props {
  icon: IconProp
  size: SizeProp
}

const IconContainer: React.FC<Props> = ({ icon, size }) => {
  return (
    <span className={'dark'}>
      <Icon icon={icon} size={size} />
    </span>
  )
}
export const Bars = () => <IconContainer icon={'bars'} size={'lg'} />
export const Ellipsis = () => <IconContainer icon={'ellipsis-h'} size={'lg'} />
export const Eye = () => <IconContainer icon={'eye'} size={'lg'} />
export const EyeSlash = () => <IconContainer icon={'eye-slash'} size={'lg'} />
export const Search = () => <IconContainer icon={'search'} size={'lg'} />
export const Config = () => <IconContainer icon={'user-cog'} size={'lg'} />
export const Phone = () => <IconContainer icon={'phone'} size={'lg'} />
export const At = () => <IconContainer icon={'at'} size={'lg'} />
export const Calendar = () => <IconContainer icon={'calendar-alt'} size={'lg'} />
export const Code = () => <IconContainer icon={'code'} size={'lg'} />
export const Link = () => <IconContainer icon={'link'} size={'lg'} />
export const ImageCard = () => <IconContainer icon={'id-card'} size={'lg'} />
export const Images = () => <IconContainer icon={'images'} size={'lg'} />
export const Image = () => <IconContainer icon={'image'} size={'lg'} />
export const CaretDown = () => <IconContainer icon={'caret-down'} size={'lg'} />
export const AngleDown = () => <IconContainer icon={'angle-down'} size={'lg'} />
export const CaretUp = () => <IconContainer icon={'caret-up'} size={'lg'} />
export const AngleUp = () => <IconContainer icon={'angle-up'} size={'lg'} />
export const StickyNote = () => <IconContainer icon={'sticky-note'} size={'lg'} />
export const CloseX = () => <IconContainer icon={'times'} size={'lg'} />
export const CloseCircleX = () => <IconContainer icon={'times-circle'} size={'lg'} />
export const User = () => <IconContainer icon={'user'} size={'lg'} />
export const Pencil = () => <IconContainer icon={'pencil-alt'} size={'lg'} />
export const SignOut = () => <IconContainer icon={'sign-out-alt'} size={'lg'} />
export const Moon = () => <IconContainer icon={'moon'} size={'lg'} />
export const Sun = () => <IconContainer icon={'sun'} size={'lg'} />
export const LinkFuera = () => <IconContainer icon={'external-link-alt'} size={'lg'} />
export const UserCog = () => <IconContainer icon={'users-cog'} size={'lg'} />
