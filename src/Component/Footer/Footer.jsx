import React from 'react'
import './Footer.css'
import footer1 from '../../assets/footer1.png'

const Footer = () => {

  return (
   <>
   <div className="footer">
    <div className="footer-up">
<div className="footer-left-style">
    <img src={footer1} alt="" className='footer-img'  />
    <div className="footer-left">
<h1 className='footer-heading1'>ABOUT <span className='footer-span-style'> GRAMODAYA INTERNATIONAL</span> SCHOOL</h1>
<ul className='footer-list'>

    <li>About School</li>
    <li>Aims and Objectives</li>
    <li>Director's Message</li>
    <li>Chairman's Message</li>
    <li>Principal's Message</li>
</ul>
    </div>
    </div>
    <div className="footer-middle">
        <h1 className='footer-middle-h1'>CURRICULUM</h1>
        <ul className='footer-middle-list'>
            <li>CBSE</li> 
        </ul>
    </div>
    <div className="footer-right">
        <h1 className='footer-h1-right'>LOCATE US</h1>
        <ul className='footer-right-list'>
            <li>Phone</li>
        </ul>
        <h2  className='footer-right-h2'>
+91-9935002095
Gramodaya College Campus, NH - 39,Jhansi Road, Mauranipur,Jhansi (UP)
gramodaya.college@gmail.com</h2>
    </div>
    </div>
<div className="footer-bootem">
    <div className="bottam-line"></div>

</div>
<div className="footer-bottam-p">
    <p className='footerp1'>Copyrights 2023 all rights reserved</p>
    <p className='footerp2'>Terms of use</p>
    <p className='footerp3'>Privacy Policy</p>
</div>
   
   </div>
   
   </>
  )
}

export default Footer