import React from 'react'
import ImageCard2 from '../modals/ImageCard2'
import './JuryContent.css'
import image1 from '../Assets/committe/jury/1.png'
import image2 from '../Assets/committe/jury/2.png'
import image3 from '../Assets/committe/jury/3.png'
import image4 from '../Assets/committe/jury/4.png'
import image5 from '../Assets/committe/jury/5.png'

function JuryContent() {
  return (
    <div className='container-lg jury__container'>

        <div className="row jury__headingRow" align='center'>
            <div className="col jury__headingCol" aling='center'>
                <div className="jury__colorStrap">
                    <h1 className="jury__heading" align='center'>
                        MEET THE JURY
                    </h1>
                </div>
            </div>
        </div>
        <div className="row jury__membersRow " align='center'>
            <div className="col-6 jury__memberCol"  > <ImageCard2 name={'SHALINI SHAH'} img1={image1} bgcolor='red' designation={'National Film Award Wiining Film Maker and Co-founder of Kautik International Film Festival'} /> </div>
            <div className="col-6 jury__memberCol"><ImageCard2 name={'RAJESH SHAH'} img1={image2} bgcolor='red' designation={'FTII Cinematographer and Festival Director of Kautik International Film Festival'}/></div>
        </div>
        <div className="row jury__membersRow" align='center'>
            <div className="col jury__memberCol"> <ImageCard2 name={'RAMESH C GOUR'} img1={image3} bgcolor='red' designation={'Director of N.S.D Delhi'}/> </div>
            <div className="col jury__memberCol"><ImageCard2 name={'TRIDEEP RAI'} bgcolor='red' img1={image4} designation={'Indian Basketball Team Captain'}/></div>
            <div className="col jury__memberCol"><ImageCard2 name={'Suryakant Tyagi'} img1={image5} bgcolor='red' designation={'Film Director'} /></div>
        </div>
    </div>
  )
}

export default JuryContent