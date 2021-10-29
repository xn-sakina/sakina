import { useCallback, useState } from 'react'

const a = 1

export const useB = () => {
  const [a, setA] = useState(false)

  const b = useCallback(() => {
    console.log('a: ', a)

    setA(true)
  }, [])

  return b
}
