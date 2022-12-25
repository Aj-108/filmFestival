import React from 'react'
import './ImageCard.css'

function ImageCard({img1,name,designation}) {
  return (
    <div className='image__card'>
        <img src={img1} alt="memberPhoto" className='member__photo' loading='lazy'/>
        <div className="member__name"> {name} </div>
        <div className="member__desg"> {designation}</div>
    </div>
  )
}

export default ImageCard