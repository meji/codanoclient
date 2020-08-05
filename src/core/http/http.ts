import axios from 'axios'

const validToken = () => {
  return localStorage.getItem('access_token')
}

const http = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    Authorization: 'Bearer ' + validToken()
  }
})

export { http }
