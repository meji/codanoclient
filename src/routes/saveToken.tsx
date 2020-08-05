import React, { useEffect } from 'react'

export const SaveToken: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const token = params.get('token')
  useEffect(() => {
    if (token) {
      window.localStorage.setItem('access_token', token)
      window.location.assign('/boards')
    }
  }, [token])
  return <></>
}
