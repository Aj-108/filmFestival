import React from 'react'
import img2 from '../Assets/committe/prasoon.png'
import './Brandamb.css'

function Brandamb() {
  return (
    <div className='container-lg brand__container'>
        <div className="row">
            <div className="col head__row">
                <div className="brand__heading">
                    BRAND AMBASSADOR UTTARAKHAND
                </div>
            </div>
        </div>
        <div className="row brand__Imagerow" align='center'>
            <div className="col brand__imageCol" align='center'>
                <img src={img2} alt="" className="brand__photo" />
                <div className="brand__name">PRASOON JOSHI</div>
            </div>
            {/* <div className="col brand__iamgeCol">
                <img src={img1} alt="" className="brand__photo" />
                <div className="brand__name">AKSHAY KUMAR </div>
            </div> */}
        </div>
    </div>
  )
}

export default Brandamb