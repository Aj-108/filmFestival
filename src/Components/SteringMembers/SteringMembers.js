import React from 'react'
import Banner from '../modals/Banner'
import Footer from '../modals/Footer'
import Logo from '../modals/Logo'
import Navbar from '../modals/Navbar'
import SteringContent from './SteringContent'
import './SteringMembers.css'
import pic from '../Assets/b1.jpg'

function SteringMembers() {
  return (
    <div className='stering'>
        <Logo/>
        <Navbar/>
        <Banner img={pic}/>
          <SteringContent/>
        <Footer/>
    </div>
  )
}

export default SteringMembers