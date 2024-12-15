import React from 'react'
import '../assets/styles/Hero.css'
import sample from '../assets/images/frame_sample.jpg'
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="coming-soon-container">
          <img src={sample} alt="not found" />
          <h1 className="hero-headline">Coming Soon.</h1>
          {/* <p className="hero-subheadline">Thoughtful decor to inspire your everyday</p> */}
        </div>
      </div>
    </>
    
  )
}

export default Hero
