import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List, List as listModel } from '../../list/domain/list'
import { CardList } from '../../list/ui/card-list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { Page } from '../../../core/components/page/page'
import { Icon } from '../../../core/components/icon/icon'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { dataContext } from '../../providers/dataProvider'
import { DragDropContext } from 'react-beautiful-dnd'
const cx = bind(styles)

export const Board: React.FC = () => {
  const history = useHistory()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const inBoard: any = params.get('id')
  const { boardName } = useParams()
  const [boardTitle, setBoardTitle] = useState(boardName)
  const [lists, setLists] = useState([] as listModel[])
  const listRepository = ListRepositoryFactory.build()
  const boardRepository = BoardRepositoryFactory.build()
  const { setBoards, setNotice } = useContext(dataContext)
  useEffect(() => {
    boardRepository
      .getById(inBoard)
      .then(response => {
        !inBoard || response.name !== boardName ? history.push('/404.html') : fetchLists()
      })
      .catch(error => {
        history.push('/404.html')
        setNotice(error.message)
      })
  }, [inBoard, boardName])

  useEffect(() => {
    setBoardTitle(boardName)
  }, [boardName])

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
  const handleKeyDownNewList = (e: any) => {
    if (e.key === 'Enter') {
      createList(e.target.value)
    }
  }
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
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (destination.dropableId === source.droppableId && destination.index === source.index) {
      return
    }

    const column = lists.filter(list => list.id === source.droppableId)[0]
    const newCardIds = Array.from(column.cards!)
    newCardIds.splice(source.index, 1)
    newCardIds.splice(destination.index, 0, draggableId)
    const newColumn: List = { ...column, cards: newCardIds }
    setLists([...lists.map(list => (list.id === newColumn.id ? newColumn : list))])
  }
  return (
    <Page size={'l'}>
      <h1>
        <Editingtitle handleKeydown={e => handleKeyDownBoardTitle(e)} value={boardTitle} />
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <ul className={cx('lists-container')}>
          {lists.length > 0 &&
            lists.map((list: listModel) => {
              return (
                <li key={list.id + 'li'}>
                  <Icon
                    key={list.id + '-icon-in-card-list'}
                    icon={'times-circle'}
                    className={cx('delete')}
                    onClick={() => deleteList(list)}
                  />
                  <CardList list={list} key={list.id + '-Cardlist'} />
                </li>
              )
            })}
          <li>
            <Editingtitle
              className={cx('new-list')}
              handleKeydown={e => handleKeyDownNewList(e)}
              value={'+ Add list'}
            />
          </li>
        </ul>
      </DragDropContext>
    </Page>
  )
}
