import React from 'react'
import './CarouselBanner.css'
import img1 from '../Assets/attraction/7.jpg'
import img3 from '../Assets/attraction/5.jpg'
import img2 from '../Assets/banner3.jpg'

function CarouselBanner() {
  return (
//     <div id="carouselExampleFade" className="carousel slide carousel-fade cc" data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active carousel__jj">      
//       <img src={img2} className="d-block w-100 carousel__bannerpic" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={img1} className="d-block w-100 carousel__bannerpic" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={img3} className="d-block w-100 carousel__bannerpic" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>


<div id="carouselExampleCaptions" class="carousel slide">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={img1} class="d-block w-100 carousel__bannerpic" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h1 className='carousel__heading'>
        <span className="head1"> UTTARAKHAND INTERNATIONAL </span>
        <span className="head2">  FILM FESTIVAL OF INDIA </span>
      </h1>
    </div>
  </div>
  <div className="carousel-item">
    <img src={img2} class="d-block w-100 carousel__bannerpic" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h1 className='carousel__heading'>
            <span className="head1"> UTTARAKHAND INTERNATIONAL </span>
            <span className="head2">  FILM FESTIVAL OF INDIA </span>
      </h1>
    </div>
  </div>
  <div className="carousel-item">
    <img src={img3} class="d-block w-100 carousel__bannerpic" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h1 className='carousel__heading'>
      <span className="head1"> UTTARAKHAND INTERNATIONAL </span>
            <span className="head2">  FILM FESTIVAL OF INDIA </span>
      </h1>
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

  )
}

export default CarouselBanner