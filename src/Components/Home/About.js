import React from 'react'
import './About.css'
import img1 from '../Assets/about2.jpg'

function About() {
  return (
    <div className='container-lg about'>
      <div className="row">
        <div className="col-lg-6 about__topSection mx-5">
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
        
        The Uttrakhand Film Festival of India is the very first, one of its kind and most significant film festival that is ever taking place in Uttrakhand. 
        <br /><br />

        The festival offers platform to all the cineast and cinelovers across the state, country and world to showcase their work, art and talent in various forms such as films, short-films, documentaries, theatrical presentation, full-length plays, poetry presentations, story drama and any other kind of cinematic talent.
        <br /><br />
        The Uttrakhand International Film Festival of India also aims to promote the rich and beautiful culture of 'The Land of the Gods', as an initiative of giving Uttrakhand a remarkable place in the Indian and International Film Industry.
        <br />
        </p>

        {/* <button type="button" class="btn btn-dark button">Read more</button> */}


        </div>
      </div> 
        
    </div>
  )
}

export default About