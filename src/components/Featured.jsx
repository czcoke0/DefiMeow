import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc.png'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import './Featured.css'
const Featured = () => {
  const [data, setData]= useState(null)
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  console.log(data)
  if(!data) return null
  return (
    <div className='featured'>
      <div className='container'>
        {/* left side */}
        <div className='left'>
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>
        {/* right side */}
        <div className='right'>
          {
            data.map((market)=> {
              return (
                <div className='card'>
                  <div className='top'>
                    <img src={market.image} alt=''/>
                  </div>
                  <div>
                    <h5>{market.name}</h5>
                    <p>${market.current_price.toLocaleString()}</p>
                  </div>
                  {market.price_change_percentage_24h <0?(
                    <span className='red'><FiArrowDown className='icon'/>{market.price_change_percentage_24h.toFixed(2)}%</span>
                    ):(
                    <span className='green'><FiArrowUpRight className='icon'/>{market.price_change_percentage_24h.toFixed(2)}%</span>
                  )}
                </div>
                );
            })
          }

        </div>

      </div>
      
    </div>
  )
}

export default Featured
