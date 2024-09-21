import React from 'react'
import './About.css'

import about1 from '../../assets/about1.png'
import about2 from '../../assets/about1.png'
import about3 from '../../assets/about1.png'
import about4 from '../../assets/about1.png'
import about5 from '../../assets/about1.png'
import about6 from '../../assets/about1.png'
const About = () => {
  return (
    <>
    <div className="about">

        <div className="aboutUp">
            
                <img src={about1} alt=""className='image1' />
                <img src={about2} alt=""className='image2' />
                <img src={about3} alt=""className='image3' />
                <img src={about4} alt=""className='image4' />
                <img src={about5} alt=""className='image5' />
                
          
           
            
        </div>
        <div className="aboutDown">
           <div className="about-left">

            <h1 className='about-left-h1' >ABOUT GIC</h1>

<p>
Established in 2008, we are Gramodaya International College. An exclusive international school located in Mauranipur, Dist Jhansi (U.P).We are a co-educational, day boarding unit. Throughout our journey, we have delivered consistently high academic standard and result.
</p>
<br />
<p>We were set up as a bridge between schools following the Indian educational system and those following various international curriculam, thereby allowing children from different academic backgrounds to settle in well with our flexible, progressive learning environment.</p>
           </div>
          
           <img src={about6} alt="" className="abot-right" />
                
           
        </div>
    </div>
    </>
  )
}

export default About