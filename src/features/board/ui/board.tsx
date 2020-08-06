import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListHttpRepository } from '../../list/infrastructure/list-http-repository'
import { List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'

export const Board: React.FC = () => {
  const { board, id } = useParams()

  const [lists, setLists] = useState([])
  useEffect(() => {
    fetchLists()
  }, [])

  async function fetchLists() {
    const listRepository = new ListHttpRepository()
    const lists: any = await listRepository.findAll(id)
    setLists(lists.lists)
    console.log()
  }

  return (
    <>
      <h1>{board}</h1>
      {lists.length && (
        <ul>
          {lists.map((list: listModel) => {
            return (
              <li>
                <h2>{list.name}</h2>
                <CardList cards={list.cards} name={list.name} key={list.id} />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
