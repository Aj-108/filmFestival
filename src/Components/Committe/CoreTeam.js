import React from 'react'
import './CoreTeam.css'
// import ImageCard from '../modals/ImageCard'

import image2 from '../Assets/committe/coreTeam/2.png'
import image3 from '../Assets/committe/coreTeam/3.png'
import image4 from '../Assets/committe/coreTeam/4.png'
import image5 from '../Assets/committe/coreTeam/5.png'
import image7 from '../Assets/committe/coreTeam/7.png'

import ImageCard2 from '../modals/ImageCard2'

function CoreTeam() {
  return (
    <div className='core'>
        <div className="container-lg core__container">
            <div className="row">
                <div className="col">
                    <div className="core__whiteStrap">
                        <h1 className="core__heading"> Core Team </h1>
                    </div>
                </div>
            </div>
            <div className="row image__row top__row">
            <div className="core__strap"></div>
                <div className="col core__col" align='center'>
                    <ImageCard2 img1={image2} name={'Pranav Tyagi'} bgcolor='blue'/>
                </div>
                <div className="col core__col" align='center'>
                    <ImageCard2 img1={image3}  name={'Annant Tyagi'} bgcolor='blue'/>
                </div>
                
            </div>
            <div className="row image__row top__row">
                
                <div className="col core__col" align='center'>
                    <ImageCard2 img1={image5} name={'Sagar Chobey'} bgcolor='blue'/>
                </div>
                <div className="col core__col" align='center'>
                    <ImageCard2 img1={image7} name={'Shudhansu Luthra'} bgcolor='blue'/>
                </div>
                <div className="col core__col" align='center'>
                        <ImageCard2 img1={image4}  name={'Akshar Tyagi'} bgcolor='blue'/>
                </div>
            </div>     
        </div>
    </div>
  )
}

export default CoreTeam