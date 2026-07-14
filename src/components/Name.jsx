import React from 'react'
import { useState } from 'react'

const Name = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
    <div class="jumbotron">
      <h1>Faiza Sajjad</h1>
      <p>Frontend Developer</p>
      </div>
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  )
}

export default Name