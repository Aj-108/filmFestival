import React from 'react'
import image8 from '../Assets/committe/coreTeam/8.png'
import ImageCard2 from '../modals/ImageCard2'
import image6 from '../Assets/committe/coreTeam/6.png'
import './MediaHandlers.css'

function MediaHandlers() {
  return (
    <div className='media'>
        <div className="container-lg media__container">
            <div className="row media__topRow">
                <div className="media__colorStrap">
                    <h1 className="media__heading">
                        Media Handlers
                    </h1>
                </div>
            </div>
            <div className="row media__row" align='center'>
                <div className="col media__col">
                    <ImageCard2 img1={image8} name={'Pushkal Jain'} bgcolor='blue' designation={'Social Media Handler'}/>
                </div>
                <div className="col media__col">
                <ImageCard2 img1={image6} name={'Rishab Bhandari'} bgcolor='blue' designation={'Media Handler'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MediaHandlers