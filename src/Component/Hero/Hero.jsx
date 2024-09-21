import React from 'react'
import './Hero.css'
import heroimage from '../../assets/heroimage.png'
const Hero = () => {
  return (
   <>
   <div className="imagestyle">
   <img src={heroimage} alt="" srcset="" className='imagestyling'  />
   </div>
   </>
  )
}

export default Hero