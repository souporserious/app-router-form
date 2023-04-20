'use client'
import * as React from 'react'

export function Counter() {
  const [count, setCount] = React.useState(0)

  return <button onClick={() => setCount(count + 1)}>Increment {count}</button>
}
