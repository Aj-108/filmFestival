import React from 'react'
import About from './About'
import Banner from '../modals/Banner'
import Navbar from '../modals/Navbar'
import './Home.css'
import MiddleSection from './MiddleSection'
import Footer from '../modals/Footer'
import Logo from '../modals/Logo'
import CarouselBanner from '../modals/CarouselBanner'
import Navbar2 from '../modals/Navbar2'

function Home() {
  return (
    <div className='home__conatiner'>
      <Logo/>
      <Navbar />
      {/* <Navbar2/> */}
      {/* <Banner /> */}
      <CarouselBanner/>
      <div className="banner--fadeBottom"></div>
      <About />
      <MiddleSection />
      <Footer />
    </div>
  )
}

export default Home