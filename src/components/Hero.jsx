import React from 'react'
import './Hero.css'
import crypto from '../assets/hero-img.png'
function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        {/* leftside */}
        <div className='left'>
            <p>Buy & Sell Crypto 24/7 using your retirement acount</p>
            <h1>Invest in Cryptocurrency with Your IRA</h1>
            <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div  className='input-container' >
                <input type="email" placeholder='Enter you email' />
                <button className='btn'>Learn More</button>
            </div>
        </div>
        {/* rightside */}
        <div className='right'>
            <div className='img-container'>
                <img src={crypto} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
