import { useEffect } from 'react'

export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: { target: any }) => {
    // const validate = ref.current && !ref.current.contains(e.target) && e.target.querySelector('a')
    const validate = ref.current && !ref.current.contains(e.target)
    if (validate) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
