import React from 'react'
import Banner from '../Banner'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './HomeUffi.css'
import UiffiBody from './UiffiBody'

function HomeUffi() {
  return (
    <div className='uiffi__body'>
        <Navbar />
        <Banner />
        <UiffiBody />   
        <Footer/>
    </div>
  )
}

export default HomeUffi