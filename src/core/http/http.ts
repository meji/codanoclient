import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL
})

export { http }
