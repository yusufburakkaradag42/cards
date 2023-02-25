import React from 'react'
import "./Card.css"
const CardTitle = ({name,img,options}) => {
  return (
    <div className='col-6'>
        <div>
        <img src={img} width="120px" height="120px" alt=''/>
        <h6>{name}</h6>
        </div>
    </div>
  )
}

export default CardTitle