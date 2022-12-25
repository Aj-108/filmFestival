import React from 'react'
import Banner from '../modals/Banner'
import Footer from '../modals/Footer'
import Navbar from '../modals/Navbar'
import JuryContent from './JuryContent'
import './Jury.css'
import Logo from '../modals/Logo'
import patrn1 from '../Assets/backgroundPics/back2.png'
import patrn2 from '../Assets/backgroundPics/back3.png'

function Jury() {
  return (
    <div className='jury'>
        <Logo/>
        <Navbar />
        <Banner />
        <img src={patrn1} alt="asdas" className='jury__pattern'/>
        <div className="image__Class">
          <img src={patrn2} alt="asdas" className='jury__pattern2'/>
        </div>
        <JuryContent/>        
        <Footer />
    </div>
  )
}

export default Jury