import React from 'react'
// import ImageCard from '../modals/ImageCard'
import './UnofficialMembers.css'
import image1 from '../Assets/committe/brijMohan.png'
import ImageCard2 from '../modals/ImageCard2'
import ICON from '../Assets/committe/icon.png'

function UnofficialMembers() {
  return (
        <div className="container-lg members">
            <div className="row members__headRow">
                <div className="col">
                    <div className="whiteStrap">
                        <span className="members__heading">
                            <h1>Unofficial Members </h1>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row image__row top__row">
                <div className="col mem__col" align='center'>
                    <ImageCard2 img1={ICON}  name={'Raj Shekar'} designation={'Businessman'} bgcolor='blue'/>
                </div>
                <div className="col mem__col" align='center'>
                    <ImageCard2 img1={image1} name={'Dr.Brij Mohan'} designation={'Director'} bgcolor='blue'/>
                </div>
            </div>
    </div>
  )
}

export default UnofficialMembers