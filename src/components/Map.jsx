import React from 'react'

const Map = () => {
   // const data =[ "GOOGLE" , "Microsoft" , "Apple" , "Amazon" , "Facebook" , "Twitter" , "Netflix" , "Tesla" , "SpaceX" , "Nvidia" ]
   const smartPhones=[
    { id: 1, name: "Apple iPhone 14",
        img: "https://m.media-amazon.com/images/I/61WUSYIQdKL._AC_UY218_.jpg"
     },
    { id: 2, name: "Apple iPhone 16",
        img: "https://m.media-amazon.com/images/I/61WUSYIQdKL._AC_UY218_.jpg"
     },
    { id: 3, name: "Apple iPhone 17",
        img: "https://m.media-amazon.com/images/I/61WUSYIQdKL._AC_UY218_.jpg"
     }
   ]
  return (
    <div>
        {smartPhones.map((data) => (
            <div key={data.id}>
                <h3>{data.name}</h3>
                <img src={data.img} alt={data.name} />
            </div>
        ))}
    </div>
  )
}

export default Map