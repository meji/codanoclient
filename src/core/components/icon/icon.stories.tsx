import React from 'react'
import { Icon } from './icon'

export default {
  title: 'Icon',
  component: Icon
}

export const iconChecked = () => <Icon  type={"checked"} size="m"/>
export const iconUnchecked = () => <Icon  type={"unchecked"}  size="m"/>
export const iconOther = () => <Icon  type={"other"}  size="m"/>
