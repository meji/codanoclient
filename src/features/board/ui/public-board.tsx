import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ListRepositoryFactory } from '../../list/infrastructure/list-repository-factory'
import { List as listModel } from '../../list/domain/list'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { Page } from '../../../core/components/page/page'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { dataContext } from '../../providers/dataProvider'
import { PublicCardList } from '../../list/ui/public-card-list'
import { Icon } from '../../../core/components/icon/icon'
import { Modal } from '../../../core/components/modal/modal'
import { Button } from '../../../core/components/button/button'
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
  const [share, setShare] = useState(false)
  const listRepository = ListRepositoryFactory.build()
  const boardRepository = BoardRepositoryFactory.build()
  const { setNotice } = useContext(dataContext)
  const sharedUrl =
    process.env.REACT_APP_FRONT_URL + 'public/boards/' + boardName + '?id=' + boardCripted
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
  const urlToCopy = useRef<HTMLTextAreaElement>(null)

  const copyUrl = () => {
    urlToCopy.current && urlToCopy.current.select()
    document.execCommand('copy')
  }

  return (
    <Page size={'l'}>
      <h1 className={cx('board-name')}>
        {boardName}
        <Icon icon={'share-alt'} size={'xs'} onClick={() => setShare(true)} />
      </h1>
      {share && (
        <Modal isVisible={share} onClose={() => setShare(false)}>
          <h1>Copy next link to share this board:</h1>
          <textarea
            readOnly={true}
            ref={urlToCopy}
            value={sharedUrl}
            className={cx('copied-text')}
          />
          <Button theme={'primary'} onClick={() => copyUrl()}>
            Copiar
          </Button>
        </Modal>
      )}
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
