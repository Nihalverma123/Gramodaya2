import React from 'react'
import achive1 from '../../assets/achive1.png'
import achive2 from '../../assets/achive2.png'
import achive3 from '../../assets/achive3.png'
import achive4 from '../../assets/achive4.png'
import achive5 from '../../assets/achive5.png'
import achive6 from '../../assets/achive6.png'
import './Achivements.css'
const Achivements = () => {
  return (
    <>
    <div className="achivements">
      <div className="heading-style">
      <h1  className='achiveh1'>Holistic Education at Gramodaya International School</h1>
      </div>
        <div className="style-all-part">
        <div className="achive-left">
         <img src={achive1} alt="" className='achiveimg1'/>
          <img src={achive2} alt="" className='achiveimg2' />
        </div>
        <div className="achive-middle">
          <h1 className='middleheading'>Our boards</h1>
          <img src={achive4} alt="" className='achiveimg3'/>
        
          <p className='paraachive1  paraachive2' >Central Board of</p><p  className='paraachive1' > Secondary Education (CBSE)</p>
         
         
        </div>
        <div className="achive-right">
<img src={achive2} alt="" className='achiveimg4'/>
<img src={achive6} alt="" className='achiveimg5'/>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Achivements