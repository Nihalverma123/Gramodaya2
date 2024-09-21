import React from 'react'
import './Star.css'
import stars1 from '../../assets/star1.png'
import stars2 from '../../assets/star2.png'
import stars3 from '../../assets/star3.png'
import stars4 from '../../assets/star4.png'
import map from '../../assets/map.png'
const Stars = () => {
  return (
   <>

   <div className="star">
    <div className="star-text">
<h4>Meet Our Stars</h4>
<h1>Our Top Achievers</h1>
</div>
<div className="starheight">
<div className="starimg">
<img src={stars1} alt=""className='starimg1' />
<img src={stars2} alt="" className='starimg2'/>
<img src={stars3} alt="" className='starimg3'/>
<img src={stars4} alt="" className='starimg4'/>

</div>
<div className="star-lower">
    <div className="left-star">
        <h1 className='lefth1'>Join To Get<span className='left-span'> Latest Update of new Collection..</span></h1>
        <div className="left-p">
        <p>Join our email subscription now to get updates on new arrivels and coupons.</p>
        </div>
        <input type="email" placeholder="Enter your email address" className='input-left'/>
        <button className='subscribe'>Subscribe</button>
    </div>
    <div className="right-star">
        <img src={map}alt="map" className='mapStyl' />
    </div>
</div>
</div>
   </div>
   </>
  )
}

export default Stars