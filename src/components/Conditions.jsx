import React from 'react'

const Conditions = () => {
    const age = 18;
  return (
    <div> {age >= 18 ? (
        <h4> You are eligible to vote</h4>
    ): (
        <h3>you are not eligible to vote</h3>
    )
} </div>
  )
}

export default Conditions