import React from 'react'

const Props = ({name, price, color , data={}}) => {
  return (
    <div>
      <h2> Brand = {name}</h2>
      <h2> Price = {price}</h2>
      <h3> Color = {color}</h3>
      <h4> Ram = {data.ram}</h4>
        <h4> Storage = {data.storage}</h4>
    </div>
  )
}

export default Props