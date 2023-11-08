import React from 'react'
import Header from '../img/Header.jpg'
import './index.css'
const Home = () => {
  return (
    <div>
      <div className='d-flex' style={{ paddingRight: 30 ,paddingLeft:30}}>
        <div>
          <h1 className='heading' style={{ fontSize: 100 }}>Precision Diagnosis <br />for Better Diabetes Management.</h1>
        </div>
        <div>
          <img src={Header} alt="" style={{ height: 650 }} />
        </div>
      </div>
    </div>
  )
}

export default Home
