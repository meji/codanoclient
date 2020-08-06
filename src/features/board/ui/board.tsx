import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListHttpRepository } from '../../list/infrastructure/list-http-repository'
import { List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'

export const Board: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const inBoard: any = params.get('id')
  const { boardName } = useParams()
  const [lists, setLists] = useState([])
  useEffect(() => {
    fetchLists()
  }, [])

  async function fetchLists() {
    const listRepository = new ListHttpRepository()
    const lists: any = await listRepository.findAll(inBoard)
    setLists(lists.lists)
  }

  return (
    <>
      <h1>{boardName}</h1>
      {lists.length && (
        <ul>
          {lists.map((list: listModel) => {
            return (
              <li key={list.id}>
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
