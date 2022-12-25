import React from 'react'
import ImageCard2 from '../modals/ImageCard2'
import './FestCoordinator.css'
import image2 from '../Assets/committe/divyaRana.png'
import image1 from '../Assets/committe/coreTeam/1.png'
import './FestCoordinator.css'

function FestCoordinator() {
  return (
    <div className='fest__cord'>
        <div className="container-lg festCord__container">
            <div className="row festCord__topRow">
                <div className="festCord__colorStrap">
                    <div className="col festCord__topCol">
                        <h1 className="festCord__heading">
                            Festival Coordinators
                        </h1>
                    </div>
                </div>
            </div>
            <div className="row festCord__row" align='center'>
                <div className="festCord__col col">
                <ImageCard2 img1={image1} name={'Aishwarya Rana'} bgcolor='blue'/>
                </div>
                <div className="festCord__col col" align='center'>
                <ImageCard2 img1={image2} name={'Divya Rana'} bgcolor='blue'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FestCoordinator