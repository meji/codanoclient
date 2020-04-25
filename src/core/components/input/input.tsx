import React from 'react'
import {Size} from "../size";
// import { bind } from '../../../utils/bind'
// import styles from './page.module.css'
//
// const cx = bind(styles)
type Input = "text" | "number" | "tel" | "password" | "submit"
interface Props {
  type : Input
  placeholder: string
}
export const Input: React.FC<Props> = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder}/>
  )
}
