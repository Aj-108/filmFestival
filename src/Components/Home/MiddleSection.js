import React from 'react'
import './MiddleSection.css'
import img1 from '../Assets/vision.jpg'
import img2 from '../Assets/stand.png'


function MiddleSection() {
  return (
    <div className='middleSection container-lg'>
        <div className="row">
            <div className="col-lg-5 mx-5">
                <div className="middleSection__heading">
                    <h1 className="mid__heading"> VISION & MISSION </h1>
                    <hr className='line'/>
                </div>
            </div>
        <div className="row">
        <div className="col-lg-5">
                <p className="middleSection__para">
                The UIFFI will help us to promote the rich and beautiful culture of Uttarakhand and it will also help in bringing new and wonderful opportunities to the state, its regional artists, tourism, and also to the youth which will enhance the overall growth and will open up new doors of success for the people along with giving Uttarakhand an eminent place in the Indian and International film industry.
                </p>
                {/* <img src={img2} alt="stand image" className='stand' /> */}
            </div>
            <div className="col-lg-6">
                <img src={img1} alt="pic is here" className='img-fluid image image1 imgimg'/>
            </div>

            
        </div>
        </div>
    </div>
  )
}

export default MiddleSection