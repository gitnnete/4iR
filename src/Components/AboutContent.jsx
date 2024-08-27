import React from "react";
import charity from "../assets/charity.jpg";
import construction from "../assets/construction.jpg";
import bursary from "../assets/bursary.jpg";

const AboutContent = () => {
  return (
    <>
      <div className="container my-5">
        {/* First Div */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6  mb-5" data-aos="fade-right">
            <img
              src={charity}
              alt="Industry Solutions 1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h1>
              At 4iR, we belive in giving back, and taking care of those around
              us.
            </h1>
            <p>
              Every year we take to the streets multiple times and take care of
              the less fortunate around. Our 4iRCaresn initiatives provides food
              and clothing to charities around South Africa.
              <br />
              <br />
              Be sure to check out ways in which you can be part of our
              initiatives, and be inolved in making a change.
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2  mb-5" data-aos="fade-right">
            <img
              src={construction}
              alt="Industry Solutions 2"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade-left">
            <h1>We are constantly looking for ways to evolve.</h1>
            <p>
              With out three buildings scattered around Gauteng, we are
              currently in the process of adding a fourth one in our home city
              of Pretoria. Be on the lookout for where this new location might
              just be.
              <br />
              <br />
              There are also plenty of job opportunities available at our
              physical locations. These jobs are for all types of professions.
            </p>
          </div>
        </div>

        {/* Third Div */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6  mb-5" data-aos="fade-left">
            <img
              src={bursary}
              alt="Industry Solutions 3"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <h1>We are also immensely invested in the future.</h1>
            <p>
              The future is in our hands. At 4iR, we have decided to take this
              phrase literally and we are involved in the education of our
              brightest young minds.
              <br />
              <br />
              If you are a student looking for ways to find funding to get you
              through varsity, feel free to send us an application and you never
              know, we might be assisting you in chasing your dreams.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
