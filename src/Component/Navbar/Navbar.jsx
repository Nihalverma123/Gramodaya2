import React from 'react'
import navlogo from '../../assets/navlogo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar">

        <div className="upperNav">
          <div className="logo-style"></div>
          <img src={navlogo} alt="" className='navlogo'/>
        </div>
        <div className="lowerNav">
            <ul className='menu'>
                <li className='homeStyle'>Home</li>
                <li>About GIC</li>
                <li>CBSE Corner</li>
                <li>Acdemics</li>
                <li>Beyond Acdemics</li>
                <li>Facilities</li>
                <li>Adimission Rule & Regulations</li>
                <li>Hotel Locate us</li>
                <li></li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default Navbar