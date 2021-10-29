import React, { useState, useCallback, FC } from 'react'

export const a = 1

export const C = () => {
  const [a, setA] = useState(false)

  const c = useCallback(() => {
    console.log(a)
  }, [])

  return 1
}
