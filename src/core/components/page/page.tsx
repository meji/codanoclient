import React from 'react'
import {Size} from "../size";
// import { bind } from '../../../utils/bind'
// import styles from './page.module.css'
//
// const cx = bind(styles)

export const Page: React.FC<{}> = ({children}) => {
  return (
    <main className="container">
      {children}
    </main>
  )
}
