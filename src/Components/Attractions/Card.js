import React from 'react'
import './Card.css'

function Card({name,topImg,bodyText}) {
  return ( 
   
    // <div className="card__body">
    //     <img src={topImg} alt="picture" className='card__image'/>
    //    <div className="card__heading">
    //         {name}
    //     </div> 
    //     <div className="card__text">
    //        <p> {bodyText} </p>
    //     </div>
    // </div>


    <div classname="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card text-bg-dark card__body">
      <img src={topImg} className="card-img-top card__image" alt="..."/>
      <div className="card-body">
        <h5 className="card-title card__title">{name}</h5>
        <p className="card-text card__text">{bodyText}</p>
      </div>
    </div>
  </div>
  {/* <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div classname="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div classname="col">
    <div className="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
</div>

  )
}

export default Card