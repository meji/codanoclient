import React from 'react'
type Input = 'text' | 'number' | 'tel' | 'password' | 'submit'
interface Props {
  type: Input
  placeholder: string
}
export const Input: React.FC<Props> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />
}
