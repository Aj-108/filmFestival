import React from 'react'
import './Logo.css'
import logo from   '../Assets/logo4.png'
import './Logo.css'
import { useNavigate } from 'react-router-dom';

function Logo() {

  const navigate = useNavigate() ;

  return (
    <div className='logo'>
        <img src={logo} alt="Logo Image" className='nav__logo' onClick={() => navigate('/')}/>
    </div>
  )
}

export default Logo