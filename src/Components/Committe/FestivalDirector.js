import React from 'react'
import './FestivalDirector.css'
import img1 from '../Assets/committe/1.png'

function FestivalDirector() {
  return (
    <div className='festival'>
        <div className="container-lg fest__container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="fest__heading"> Festival Director </h1>
                    <hr />
                    <p className="fest__para">
                    Mr. Udit Tyagi is a young and enthusiast cinelover who is working exceptionally to take Uttrakhand's film industry to  a higher level by removing the gap between the regional film industry of Uttrakhand and Indian as well as International Film Industry. His love for cinema is depicted from the fact that he started his theater journey in 2015 and worked with renowned teachers of NSD in various plays.  After dedicatedly working in the field of theater and cinema, he is introducing the first ever edition of Uttrakhand International Film Festival of India to open the wide doors of success and exposure for Uttrakhand, it’s film industry and extremely talented artists in the world of cinema.
                    <br /> <br />
                    He is also a very active social worker and the founder of Uday Devbhumi Charitable Trust which works in the field of student counselling, sports, women empowerment, healthcare and human well being. During Covid pandemic he also worked with Mr. Sonu Sood as a helping in one of the most toughest times of mankind.
                    <br /><br />
                    His vision is to make Uttrakhand International Film Festival of India as best as any other National and International Film Festivals which are held all over the world.
                    </p>
                </div>
                <div className="col-lg-6  fest_picArea" align='center'>
                    <img src={img1} alt="Udit Tyagi Pic" loading='lazy' className="fest__pic" />
                    <div className="dir__name ">
                        Udit Tyagi
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FestivalDirector