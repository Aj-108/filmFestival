import React from 'react'
import Banner from '../modals/Banner'
import Navbar from '../modals/Navbar'
import './Committe.css'
import FestivalDirector from './FestivalDirector'
import back from '../Assets/grd1.jpeg'
import UnofficialMembers from './UnofficialMembers'
import CoreTeam from './CoreTeam'
import Brandamb from './Brandamb'
import Footer from '../modals/Footer'
import Heading from './Heading'
import Logo from '../modals/Logo'
import FestCoordinator from './FestCoordinator'
import MediaHandlers from './MediaHandlers'

function Committe() {

  return (
    <div className='committe'>
        <Logo/>
        <Navbar />
        <Banner />
        <div className="cmt__background">
            {/* <img src={back} loading='lazy' alt="background Image" className='back__image'/> */}
            <Brandamb />
            {/* <Heading/> */}
            <FestivalDirector/>
            <UnofficialMembers />
            <FestCoordinator/>
            <MediaHandlers/>
            <CoreTeam/>
            <Footer/>
        </div>
        
    </div>
  )
}

export default Committe