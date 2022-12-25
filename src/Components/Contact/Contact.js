import React from 'react'
import Banner from '..//modals/Banner'
import Navbar from '../modals/Navbar'
import ContactBody from './ContactBody'
import Footer from '../modals/Footer'
import './Contact.css'
import Logo from '../modals/Logo'

function Contact() {
  return (
    <div className='Contact'>
        <Logo/>
        <Navbar/>
        <Banner/>
        <ContactBody />
        <Footer/>
    </div>
  )
}

export default Contact