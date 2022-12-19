import React from 'react'
import './About.css'
import img1 from './Assets/about2.jpeg'

function About() {
  return (
    <div className='container-lg about'>
      <div className="row">
        <div className="col-lg-3 about__topSection mx-5">
            <h1 className="about__heading ">What is UIFFI</h1>
            <hr className='line2'/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mx-3">

        <img src={img1} class="img-fluid image image1" alt="uttarkhand image" />

        </div>
        <div className="mx-2 col-lg-5 row2">

        <p className="about__text">
        The Uttarakhand International Film Festival of India provides a platform for actors to explore and create innovative expressions through films and plays. 
        
        <br/><br/>Aiming to bring innovative work to the land of gods, Uttarakhand, the festival welcomes any kind of theatrical presentation, such as a full-length play, short play, poetry presentation, story drama, solo performance, short-film, documentary film and any new creative innovation.
        <br/><br/>Mark your calendars for the first edition of the festival, taking place from 12 to 14 February 2023, with the participation of eminent film and theatre artists from around the world.
        </p>

        <button type="button" class="btn btn-dark button">Read more</button>


        </div>
      </div> 
        
    </div>
  )
}

export default About