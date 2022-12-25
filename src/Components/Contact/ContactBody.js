import React, { useState } from 'react'
import './ContactBody.css'
import Contact from  '../Assets/Contact.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function ContactBody() {

    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [email,setEmail] = useState("");
    const [body,setBody] = useState("");


    const submitHandler = (e) =>{
        e.preventDefault() ;
        console.log("working")
    }

  return (
    <div className='contact__body'>
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <h1 className="contact__heading">Contact Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 contact__col1">
                        <img src={Contact} loading='lazy' alt="phone Image" className='contact__image'/>
                        <span className="contact__tagLine"> Got an Issue Feel Free to Give us a Ring ! </span>
                        <div className="contact__info">
                            <div className="contact__infotext">
                                <div className="contactIcon"> <PhoneIcon /> </div>
                                <div className="contact__numbers">
                                    <div className="contact__number"> +919084472335 , +918287605464 </div>
                                    {/* <div className="contact__number"> +918287605464 </div> */}
                                </div>
                            </div>
                            <div className="contact__infotext">
                                <div className="contactIcon"> <EmailIcon /> </div>
                                <div className="contact__number"> uiffi.official@gmail.com </div>
                            </div>
                        </div>
                        <div className="contact__social">
                            <div className="icon__social"> <InstagramIcon/> </div>
                            <div className="icon__social"> <FacebookIcon/> </div>
                            <div className="icon__social"> <YouTubeIcon/> </div>
                        </div>
                </div>
                <div className="col-6">
                    <form className="contact__form">
                        <div className="form__field">
                            <span className="form__text"> Your Name </span>
                            <input type="text" className="form__input"  placeholder='Enter name here' value={name} onChange = {(e) =>setName(e.target.value)}/> 
                        </div>
                        <div className="form__field">
                            <span className="form__text"> Your Email Address </span>
                            <input type="text" className="form__input" placeholder='Enter email here' value={email} onChange = {(e) =>setEmail(e.target.value)}/> 
                        </div>
                        <div className="form__field">
                            <span className="form__text"> Subject </span>
                            <input type="text" className="form__input" placeholder='Email Subject' value={subject} onChange = {(e) =>setSubject(e.target.value)}/> 
                        </div>
                        <div className="form__field">
                            <span className="form__text"> Tell Us about your query </span>
                            <textarea 
                                className="form-control form__input form__textarea" 
                                placeholder="Leave a comment here" 
                                id="floatingTextarea"
                                value={body} onChange = {(e) =>setBody(e.target.body)}
                                ></textarea>    
                        </div>
                        <div className="form__field">
                            <button type='submit' className='contact__submit' onClick={submitHandler}> Send Your Message </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactBody