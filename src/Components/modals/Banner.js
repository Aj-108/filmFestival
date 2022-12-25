import React from 'react'
import './Banner.css'

function Banner(img) {
  return (
    <div className='banner' style={{backgroundImage:{img}}}>
        <div className="blackCover">
             
          <h1 className="heading">
            <span className="head1"> UTTARAKHAND INTERNATIONAL </span>
            <span className="head2">  FILM FESTIVAL OF INDIA </span>
            </h1>
        
        </div>
    </div>
  )
}

export default Banner