import './App.css'
import About from './Component/About/About'
import Achivements from './Component/Achivement/Achivements'
import Footer from './Component/Footer/Footer'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import School_Activity from './Component/School_Activity/School_Activity'
import Stars from './Component/Star/Star'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
     <Achivements/>
     <School_Activity/>
     <Stars/>
     <Footer/>
    </>
  )
}

export default App
