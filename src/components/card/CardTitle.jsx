import React from 'react'
import "./Card.css"
const CardTitle = ({name,img,options}) => {
  return (
    <div className='card col-6 '>
     
        <img src={img} width="100px" height="100px" alt=''/>
        <h6>{name}</h6>
      
    </div>
  )
}

export default CardTitle