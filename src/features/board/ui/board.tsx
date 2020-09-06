import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List, List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { TextInput } from '../../../core/components/forms/inputs/text-input/text-input'
import { Page } from '../../../core/components/page/page'
import { Icon } from '../../../core/components/icon/icon'
import { Notice } from '../../../core/components/notice/notice'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { dataContext } from '../../providers/dataProvider'
const cx = bind(styles)

export const Board: React.FC = () => {
  const history = useHistory()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const inBoard: any = params.get('id')
  const { boardName } = useParams()
  const [boardTitle, setBoardTitle] = useState(boardName)
  const [newListValue, setNewListValue] = useState('')
  const [lists, setLists] = useState([] as listModel[])
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!inBoard) {
      history.push('/404.html')
    } else {
      fetchLists()
    }
  }, [inBoard])

  useEffect(() => {
    setBoardTitle(boardName)
  }, [boardName])

  const listRepository = ListRepositoryFactory.build()
  const boardRepository = BoardRepositoryFactory.build()

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
      setNewListValue('')
      createList(e.target.value)
    }
  }
  const { setBoards } = useContext(dataContext)
  const handleKeyDownBoardTitle = (e: any) => {
    boardRepository.update(inBoard, e.target.value)
    boardRepository.findAll().then(response => setBoards(response))
    setBoardTitle(e.target.value)
  }
  const deleteList = (list: List) => {
    if (window.confirm('List ' + list.name + ' will be deleted')) {
      listRepository.delete(list).then(() => {
        setNotice('List deleted')
        fetchLists()
      })
    }
  }
  return (
    <Page size={'l'}>
      <Notice content={notice} />
      <h1>
        <Editingtitle handleKeydown={e => handleKeyDownBoardTitle(e)} value={boardTitle} />
      </h1>
      <ul className={cx('lists-container')}>
        {lists.length > 0 &&
          lists.map((list: listModel) => {
            return (
              <li key={list.id}>
                <Icon
                  icon={'times-circle'}
                  className={cx('delete')}
                  onClick={() => deleteList(list)}
                />
                <CardList name={list.name} key={list.id} id={list.id} inBoard={list.inBoard} />
              </li>
            )
          })}
        <li>
          <TextInput
            placeholder={'+ Add list'}
            onKeyDown={e => handleKeyDown(e)}
            onChange={e => setNewListValue(e.value)}
            value={newListValue}
          />
        </li>
      </ul>
    </Page>
  )
}
