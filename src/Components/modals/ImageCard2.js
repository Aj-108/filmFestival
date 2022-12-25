import React from 'react'
import './ImageCard2.css'

function ImageCard2({name,designation,img1,bgcolor,textcolor}) {
  return (
    <div className={`imageCard  ${bgcolor==='blue' && 'blue__card'} ${bgcolor==='red' && 'red__card'} ${bgcolor==='green' && 'green__card'} `} >
        <div className="image__photo">
            <img src={img1} alt="memberPhoto"  loading='lazy' className='image__photo'/>
        </div>
        <div className={`image__name  ${bgcolor==='blue' && 'blue__heading'}`}> {name} </div>
        <div className="image__designation"> {designation} </div>
    </div>
  )
}

export default ImageCard2