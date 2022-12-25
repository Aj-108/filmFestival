import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (


    <div className="footer">
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-4">
                    <h1 className="footer__heading"> About Us </h1>
                            <p className="footer__text">
                            Uttarakhand International Film Festival of India  has featured works that center the actor. It focuses on films and plays, which allow actors to explore and create innovative expressions.  
                            </p>
                        <div className="col">
                            <img src="" alt="" />
                        </div>
                </div>
                <div className="col-lg-4 footer__links">
                    <h1 className="footer__heading">
                        Important Links
                    </h1>
                    <ul className="footer__linksList">
                                <li className="footer__item">abc</li>
                                <li className="footer__item">abc</li>
                                <li className="footer__item">abc</li>
                                <li className="footer__item">abc</li>
                    </ul>
                </div>
                <div className="col-lg-4 ">
                    <h1 className="footer__heading">Contact Info</h1>
                    <div className="row">
                        <div className="col">
                            <ul className="footer__contactList">
                                <li className="footer__contact"> <PhoneIcon/>  +919084472335 </li>
                                <li className="footer__contact"> <EmailIcon/> uiffi.official@gmail.com </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer__last">
                <span className="footer__note">  Uttarakhand International Film Festival of India  </span>
                <div className="socialMediaIcons">
                    <InstagramIcon className='socialIcon'/>
                    <FacebookIcon className='socialIcon'/>
                    <YouTubeIcon className='socialIcon'/>
                </div>
            </div>

        </div>
    </div>

    // <div className='footer'>
    //     <div className="container-lg footer__box">
    //         <div className="row footer__headRow">
    //             <div className="col-lg-6 ">
    //                 <h1 className="footer__heading"> UIFFI 2023 </h1>
    //             </div>
    //             <div className="col-lg-6">
    //             <h1 className="footer__heading hhh"> Get in Touch </h1>
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col-lg-6">
    //             <p className="footer__text">
    //                   Uttarakhand International Film Festival of India  has featured works that center the actor. It focuses on films and plays, which allow actors to explore and create innovative expressions.
    //             </p>
    //             </div>
    //             <div className="col-lg-6">
    //                 <div className="footer__list">
    //                     <div className="footer__icon1">
    //                         <PhoneIcon className='icon_footer phoneIcon'/> 
    //                         <span className='text__footer'> +919084472335 </span>
    //                     </div>
    //                     <div className="footer__icon1">
    //                         <EmailIcon className='icon_footer emailIcon'/> 
    //                         <span className='text__footer'> uiffi.official@gmail.com </span>
    //                     </div>
    //                     <div className="socialMediaIcons">
    //                                 <InstagramIcon className='socialIcon'/>
    //                                 <FacebookIcon className='socialIcon'/>
    //                                 <YouTubeIcon className='socialIcon'/>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>



  )
}

export default Footer