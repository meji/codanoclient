import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { TextInput } from '../../../core/components/forms/inputs/text-input/text-input'
import { Page } from '../../../core/components/page/page'
const cx = bind(styles)

export const Board: React.FC = () => {
  const history = useHistory()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const inBoard: any = params.get('id')
  const { boardName } = useParams()
  const [newBoardValue, setNewBoarValue] = useState('')
  const [lists, setLists] = useState([] as listModel[])

  useEffect(() => {
    if (!inBoard) {
      history.push('/404.html')
    } else {
      fetchLists()
    }
  }, [inBoard])

  const listRepository = ListRepositoryFactory.build()

  async function fetchLists() {
    const lists: listModel[] = await listRepository.findAll(inBoard)
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
      setNewBoarValue('')
      createList(e.target.value)
    }
  }
  return (
    <Page size={'l'}>
      <h1>{boardName}</h1>
      <ul className={cx('lists-container')}>
        {lists.length > 0 &&
          lists.map((list: listModel) => {
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
            onChange={e => setNewBoarValue(e.value)}
            value={newBoardValue}
          />
        </li>
      </ul>
    </Page>
  )
}
