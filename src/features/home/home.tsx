import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { dataContext } from '../providers/dataProvider'
import { Page } from '../../core/components/page/page'
import { bind } from '../../utils/bind'
import styles from './home.module.css'
import { Icon } from '../../core/components/icon/icon'
import { Button } from '../../core/components/button/button'
import { upDateVh } from '../../core/components/utils/updateVh'
const cx = bind(styles)

function HomeIcons() {
  return (
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
  )
}

function HomeText() {
  return (
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
  )
}

function HomeHero() {
  return (
    <h1>
      <small>
        {'<'}
        <span>Welcome to</span>
        {'>'}{' '}
      </small>
      <strong>Codalia</strong>
    </h1>
  )
}

function HomeLoginTexts(props: { onClick: () => void }) {
  return (
    <div className={cx('links-container')}>
      <Button onClick={props.onClick} theme={'transparent'} icon={'user-plus'}>
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
  )
}

export const Home: React.FC = () => {
  useEffect(() => {
    upDateVh()
    return window.removeEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }, [])

  const history = useHistory()
  const { user } = useContext(dataContext)
  if (user.name) {
    history.push(routes.boards)
  }
  return (
    <Page className={cx('home-page', 'body')}>
      <div>
        <HomeHero />
        <HomeIcons />
      </div>
      <HomeLoginTexts onClick={() => history.push('/auth/signup')} />
      <HomeText />
    </Page>
  )
}
