import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { dataContext } from '../providers/dataProvider'
import { Page } from '../../core/components/page/page'
import { bind } from '../../utils/bind'
import styles from './home.module.css'
import { Icon } from '../../core/components/icon/icon'
import { Button } from '../../core/components/button/button'
const cx = bind(styles)

export const Home: React.FC = () => {
  const history = useHistory()
  const { user } = useContext(dataContext)
  if (user.name) {
    history.push(routes.boards)
  }
  return (
    <Page className={cx('home-page')}>
      <div>
        <h1>
          <small>
            {'<'}
            <span>Welcome to</span>
            {'>'}{' '}
          </small>
          <strong>Codalia</strong>
        </h1>
        <ul className={cx('icons')}>
          <li>
            <Icon icon={'code'} />
          </li>
          <li>
            <Icon icon={'sticky-note'} />
          </li>
          <li>
            <Icon icon={'link'} />
          </li>
          <li>
            <Icon icon={'images'} />
          </li>
        </ul>
      </div>
      <div className={cx('button-container')}>
        <Button
          onClick={() => history.push('/auth/signup')}
          theme={'transparent'}
          icon={'user-plus'}
        >
          Sign up
        </Button>
        <p>
          Login{' '}
          <Link to={'/auth/login'} title={'Login'}>
            here
          </Link>{' '}
          if you have an account
        </p>
      </div>
      <h2>
        Organize your code snippets, notes, bookmarks and pictures using
        <br />
        <strong>
          <a
            href={'https://www.markdownguide.org/getting-started/'}
            title={'link to MarkDown documentation'}
            target={'_blank'}
            rel="noopener noreferrer"
          >
            MarkDown Notation
          </a>
        </strong>
      </h2>
    </Page>
  )
}
