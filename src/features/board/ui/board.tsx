import React from 'react'
import { List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'

export const Board: React.FC<{
  lists: listModel[]
}> = ({ lists }) => {
  return (
    <ul>
      {lists.map(list => {
        return (
          <li>
            <CardList cards={list.cards} name={list.name} key={list.id} />
          </li>
        )
      })}
    </ul>
  )
}
