import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar2.css'

function Navbar2() {
 
    const navigate = useNavigate() ;

    const [show,handleShow] = useState(false) ;
  
    const transitionNavBar = () =>{
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false) ;
      }
    }
  
    useEffect(()=>{
      window.addEventListener('scroll',transitionNavBar) ; 
      return () => window.removeEventListener('scroll',transitionNavBar) ;
      },[])
  
    return (
  
  
  
      <nav className={`navbar navbar-expand-lg fixed-top`}>
        {/* <img src={logo} alt="Logo" loading='lazy' className='uiffilogo' onClick={() => navigate('/')}/> */}
          <div className={`container-fluid ${show && "nav__black"}`}>
          <a className="navbar-brand" href="#">
            {/* <img src={logo} alt="Logo" loading='lazy' className='uiffilogo' onClick={() => navigate('/')}/> */}
          </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navBar__items">
                  <ul className="navBar__itemsList nav__item2">
                    <li className="navBar__text" onClick={() => navigate('/')}>Tikcet Booking</li>
                    <li className="navBar__text" onClick={() => navigate('/steeringMembers')}>Registration</li>
                    
                    <li className="navBar__text" onClick={() => navigate('/guset')}>Schedule</li>
                    <li className="navBar__text" onClick={() => navigate('/otherAttractions')}>FAQ</li>
                  </ul>
                </div>
                {/* <img src={img2} alt="video image" className='nav__image'/> */}
            </div>
          </div>
        </nav>
  )
}

export default Navbar2