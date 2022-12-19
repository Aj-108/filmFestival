import React from 'react'
import About from './About'
import Banner from './Banner'
import Navbar from './Navbar'
import './Home.css'
import MiddleSection from './MiddleSection'
import Footer from './Footer'

function Home() {
  return (
    <div className='home__conatiner'>

      <Navbar />
      <Banner />
      <div className="banner--fadeBottom"></div>
      <About />
      <MiddleSection />
      <Footer />


    </div>
  )
}

export default Home