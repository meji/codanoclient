import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { TextInput } from '../../../core/components/forms/inputs/text-input/text-input'
import { Header } from '../../header/header'
const cx = bind(styles)

export const Board: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const inBoard: any = params.get('id')
  const { boardName } = useParams()
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetchLists()
  }, [])

  const listRepository = ListRepositoryFactory.build()

  async function fetchLists() {
    const lists: any = await listRepository.findAll(inBoard)
    setLists(lists)
  }
  async function createList(list: string) {
    if (inBoard) {
      const newList = { name: list, inBoard: inBoard }
      await listRepository.create(newList).then(() => fetchLists())
    }
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      createList(e.target.value)
    }
  }
  return (
    <>
      <Header />
      <h1>{boardName}</h1>
      {lists.length && (
        <ul className={cx('lists-container')}>
          {lists.map((list: listModel) => {
            return (
              <li key={list.id}>
                <CardList name={list.name} key={list.id} id={list.id} />
              </li>
            )
          })}
          <li>
            <TextInput
              placeholder={'Crear Nueva lista'}
              onKeyDown={e => handleKeyDown(e)}
            ></TextInput>
          </li>
        </ul>
      )}
    </>
  )
}
