import React from 'react'
import img1 from '../../assets/bg-react.svg'
import "./Card.css"
import CardTitle from './CardTitle'
import {languages} from '../../helper/data'

const Card = () => {
  return (
    <div className='box text-center'>
        <div className='title'>
            <img src={img1} alt="" width='200px' />
        </div>
        <div className="main">
            <h1 className='text-light' >Languages</h1>
            <div className="strip"></div>
            <div className="lang row">
   {languages.map((item)=>< CardTitle {...item}/>  )} 
                </div>
        </div>
    </div>
  )
}
export default Card