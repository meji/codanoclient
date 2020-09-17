import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List as listModel } from '../../list/domain/list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { Page } from '../../../core/components/page/page'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { dataContext } from '../../providers/dataProvider'
import { PublicCardList } from '../../list/ui/public-card-list'
const cx = bind(styles)
const encryptor = require('simple-encryptor')(process.env.REACT_APP_SECRET_CRIPT)

export const PublicBoard: React.FC = () => {
  const history = useHistory()
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const boardCripted = params.get('id')
  const inBoard = encryptor.decrypt(boardCripted)
  console.log(inBoard)
  const { boardName } = useParams()
  const [lists, setLists] = useState([] as listModel[])
  const listRepository = ListRepositoryFactory.build()
  const boardRepository = BoardRepositoryFactory.build()
  const { setNotice } = useContext(dataContext)
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
  }, [boardName])

  async function fetchLists() {
    await listRepository.findAll(inBoard).then(response => {
      setLists(response)
    })
  }

  return (
    <Page size={'l'}>
      <h1>{boardName}</h1>
      <ul className={cx('lists-container')}>
        {lists.length > 0 &&
          lists.map((list: listModel) => {
            return (
              <li key={list.id + 'li'}>
                <PublicCardList list={list} key={list.id + '-Cardlist'} />
              </li>
            )
          })}
      </ul>
    </Page>
  )
}
