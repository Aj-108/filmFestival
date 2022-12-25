import React from 'react'
import Banner from '../modals/Banner'
import Footer from '../modals/Footer'
import Logo from '../modals/Logo'
import Navbar from '../modals/Navbar'
import './Venue.css'
import img1 from '../Assets/ditPics/1.jpg'
import img2 from '../Assets/dit3.jpg'

function Venue() {
  return (
    <div className='Venue'>
        <Logo/>
        <Navbar />
        <Banner />


        <div className="container venue__container my-4">
                <div className="row">
                    <div className="col-6">
                        <div className="venue__heading"> DIT University (Dehradun) </div>
                        <div className="row">
                          <div className="col my-5">
                            <p className="venue__para">
                            DIT University's campus is located on the foothills of Mussoorie. Dehradun is located 240 kilometres north-east of Delhi. The area of the campus is 25 acres out of which 23 acres is developed, the prominent buildings are Vedanta, Chanakya and Civil block. There is a 2 acre ground available for students, parking, and other facilities are also  available in DIT.
                            </p>
                          </div>
                          <div className="row venue__photoRow">
                            <div className="col ">
                                <img src={img1} alt="dit pic 1" className='venue__photos'/>
                            </div>
                            <div className="col venue__photos">
                              <img src={img2} alt="dit pic 2" className='venue__photos ditPic'/>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-6 my-5" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.265880087328!2d78.07678871562352!3d30.400197481754326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d70603f128a5%3A0x359bb8f9c7797984!2sDIT%20University!5e0!3m2!1sen!2sin!4v1671458815006!5m2!1sen!2sin" width="600" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">a</iframe>
                    </div>
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default Venue