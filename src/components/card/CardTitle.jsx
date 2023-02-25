import React from 'react'
import "./Card.css"
const CardTitle = ({name,img,options}) => {
  return (
    <div className='card col-6 '>
        <div>
        <img src={img} width="120px" height="100px" alt=''/>
        <h6>{name}</h6>
        </div>
        <div className='cardback'>
               {options.map((item,e)=>(
                <ul key={e}>
                    <li>{item}</li>
                </ul>
               ))}
        </div>
    </div>
  )
}

export default CardTitle