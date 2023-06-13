import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import favicon from '../assets/favicon1.png'
const Navbar = () => {
    const[click, setClick]=useState(false);
    const handleClick=() => setClick(!click);
  return (

    <div className='header'>
      <div className='container'>
        <h1><span className='primary'>DeFi</span><span >Meow</span></h1>
        <img  className='favicon' src={favicon} alt=''/>
        <ul className={click?'nav-menu active':'nav-menu'}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Feature</a>
            </li>
            <li>
                <a href='/'>Earn</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
        <div className='btn-group'>
            <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:'#333'}}/>):(<FaBars size={20} style={{color:'#333'}}/>)}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
