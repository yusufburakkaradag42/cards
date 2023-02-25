import React from 'react'
import img1 from '../../assets/bg-react.svg'
import "./Card.css"


const Card = () => {
  return (
    <div className='box text-center'>
        <div className='title'>
            <img src={img1} alt="" width='160px' />
        </div>
        <div className="main">
            <h1 >Languages</h1>
            <div className="strip"></div>
        </div>
    </div>
  )
}
export default Card