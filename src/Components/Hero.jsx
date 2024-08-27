import React from "react";
import skyline from "../assets/skyline.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src={skyline} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <div className="hero-text-sm text-center">
            <h1>Welocome to The Fourth Industrial Revolution</h1>
          </div>
          <div className="hero-text-lg">
            <div className="hero-item text-start">
              <h1>Comprehensive cloud solutions</h1>
              <p className="additional-text pb-3 text-start ms-1">
                Unlock agility and scalability by leveraging key partnerships
                with AWS, Microsoft, Alibaba Cloud and Dotcom Software
                Solutions.
              </p>
              <button className="hero-button">Learn More</button>
            </div>
            <div className="hero-item text-start">
              <h1>Established collaborations and accredited experts</h1>
              <p className="additional-text pb-3 text-start ms-1">
                This sentence highlights the organization's enduring
                relationships with other entities and emphasizes the
                qualifications and certifications of their specialists.
              </p>
              <button className="hero-button">Learn More</button>
            </div>
            <div className="hero-item text-start">
              <h1>
                Secure your business's future with advanced cybersecurity
                solutions.
              </h1>
              <p className="additional-text pb-3 text-start ms-1">
                Protect your business from evolving threats with our
                cutting-edge cybersecurity services. Trust us to fortify your
                business against cyber risks, so you can focus on growth with
                confidence.
              </p>
              <button className="hero-button">Learn More</button>
            </div>
            <div className="hero-item text-start">
              <h1>
                Enhance your connectivity with integrated collaboration tools
              </h1>
              <p className="additional-text pb-3 text-start ms-1">
                Whether you're in the office or on the go, our tools ensure your
                team stays connected, productive, and ahead of the competition.
              </p>
              <button className="hero-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
