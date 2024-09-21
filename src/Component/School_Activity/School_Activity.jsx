import React from 'react'
import schoolac1 from '../../assets/schoolac1.png'
import schoolac11 from '../../assets/schoolac1.1.png'
import schoolac2 from '../../assets/schoolac2.png'
import schoolac22 from '../../assets/schoolac2.1.png'
import schoolac3 from '../../assets/schoolac3.png'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'

import './School_Activity.css'

const School_Activity = () => {
  return (
   <>
   
   <div className="activity">

   <h1 className='activityh1'>Follow Us on School Blog</h1>
    <div className="activity-upper">
    
    <div className="img1ac">
      <img src={schoolac11} alt="" className='school1acimg1'/>
      <img src={schoolac1} alt=""  className='school1acimg2'/>
    </div>
    <div className="img2ac">
      <img src={schoolac22} alt=""className='school1acimg3' />
      <img src={schoolac2} alt="" className='school1acimg4' />
    </div>
    <div className="img3ac">
      {/* <img src={schoolac33} alt=""className='school1acimg5' /> */}
      <img src={schoolac3} alt="" className='school1acimg6'/>
    </div>
    </div>
    <h1  className='galleryh1'>Gallery</h1>
    <div className="activity-lower">
   
<img src={gallery1} alt="" className='gallery1img1'/>
<img src={gallery2} alt="" className='gallery1img2' />
<img src={gallery3} alt="" className='gallery1img3' />
    </div>
   </div>
   
   </>
  )
}

export default School_Activity