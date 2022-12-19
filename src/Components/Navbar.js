import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

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
        <div className={`container-fluid ${show && "nav__black"}`}>
        <a className="navbar-brand" href="#">Logo</a>
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
                <ul className="navBar__itemsList">
                  <li className="navBar__text">Home</li>
                  <li className="nav-item dropdown navBar__text">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     About Us
                     </a>
                     <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="#">UFFI1</a></li>
                     <li><a className="dropdown-item" href="#">Committe</a></li>
                     <li><a className="dropdown-item" href="#">Contact Us</a></li>
                     </ul>
                 </li>
                  <li className="navBar__text">Stering Members</li>
                  <li className="navBar__text">Venue</li>
                  <li className="navBar__text">Guest</li>
                  <li className="navBar__text">General Attraction</li>
                  <li className="navBar__text">Registration</li>
                  {/* <li className="navBar__text">Contact Us</li> */}
                  <li className="navBar__text">FAQ</li>
                </ul>
              </div>
          </div>
        </div>
      </nav>

//     <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//   <a class="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>



    // <nav className="navbar navbar-expand-lg navbar__ navbar-dark">
    //     <div className="container-fluid">
    //         <div className="navbar__heading navbar__logo">
    //             <a className="navbar-brand" href="#">LOGO</a>
    //         </div>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //         </button>
            
    //         <div className="collapse navbar-collapse navbar__items navbar__items" id="navbarTogglerDemo02">  
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                 <a className="nav-link " aria-current="page" href="#">Home</a>
    //                 </li>
    //                 <li className="nav-item">
    //                 <a className="nav-link" href="#">Link</a>
    //                 </li>
    //                 <li className="nav-item dropdown">
    //                   <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                   Dropdown link
    //                    </a>
    //                    <ul className="dropdown-menu">
    //                     <li><a className="dropdown-item" href="#">Action</a></li>
    //                     <li><a className="dropdown-item" href="#">Another action</a></li>
    //                     <li><a className="dropdown-item" href="#">Something else here</a></li>
    //                    </ul>
    //                </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>


            // <nav className="navbar navbar-expand-lg bg-light">
            // <div className="container-fluid">
            // <a className="navbar-brand" href="#">Navbar</a>
            // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            //     <span className="navbar-toggler-icon"></span>
            // </button>
            // <div className="collapse navbar-collapse" id="navbarNavDropdown">
            //     <ul className="navbar-nav">
            //     <li className="nav-item">
            //         <a className="nav-link active" aria-current="page" href="#">Home</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">Features</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">Pricing</a>
            //     </li>
            //     <li className="nav-item dropdown">
            //         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            //         Dropdown link
            //         </a>
            //         <ul className="dropdown-menu">
            //         <li><a className="dropdown-item" href="#">Action</a></li>
            //         <li><a className="dropdown-item" href="#">Another action</a></li>
            //         <li><a className="dropdown-item" href="#">Something else here</a></li>
            //         </ul>
            //     </li>
            //     </ul>
            // </div>
            // </div>
            // </nav>

  )
}

export default Navbar