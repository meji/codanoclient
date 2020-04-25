import React from 'react'
import { Icon } from './icon'

export default {
  title: 'Icon',
  component: Icon
}

export const eye = () => <Icon icon={'eye'} size={'lg'} />
export const slash = () => <Icon icon={'eye-slash'} size={'lg'} />
export const menu = () => <Icon icon={'bars'} size={'lg'} />
export const config = () => <Icon icon={'user-cog'} size={'lg'} />
export const search = () => <Icon icon={'search'} size={'lg'} />
