import React from "react";
import backgroundContact from '../assets/contact.jpg'

const ContactHeading = () => {
  return (
    <>
      <div
      className="heading-contact d-flex justify-content-center align-items-center text-center"
      style={{
        height: '35vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden', // Prevent overflow onto other divs
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundContact})`,
          backgroundSize: 'cover',
          backgroundPosition: '20% 30%',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1, // Ensure the background stays behind the text
          animation: 'zoomInOut 10s ease-in-out infinite',
        }}
      ></div>
      <h1 className="text-white" style={{ zIndex: 1 }}>Contact Us</h1>
    </div>
    </>
  );
};

export default ContactHeading;
