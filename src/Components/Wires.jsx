import React from 'react'
import wires from '../assets/wires.mp4'

const Wires = () => {
  return (
    <>
    <div className="video-section mt-4">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={wires} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="container">
          <div className="wire-content text-start">
            <h1>Innovative Solutions</h1>
            <h2>Your trusted partner in technology</h2>
            <button className="wires-button text-center">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wires
