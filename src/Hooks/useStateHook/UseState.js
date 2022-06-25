import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0)

  const increment = () => setCount(preValue => preValue+1)
  const decrement = () => setCount(preValue => preValue-1)

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default UseState