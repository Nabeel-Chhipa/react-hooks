import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('Blue')

  const increment = () => {
    setCount(preValue => preValue+1)
    setTheme('Black')
  }
  const decrement = () => setCount(preValue => preValue-1)

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default UseState