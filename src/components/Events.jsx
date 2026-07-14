import React from 'react'

const Events = ({ title }) => {
   return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Events