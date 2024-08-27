import React from "react";
import keyboard from "../assets/keyboards.jpg";

const YourPartner = () => {
  return (
    <>
      <div className="section-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={keyboard}
                alt="Sample"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <h1 className="py-3 fw-bold">
                We always make sure that our customers are satisfied.
              </h1>
              <p className="lead pb-2">
                Let us take your business into the 21 century and ensure that
                you are up to date with the latest technology and facilities.
                Since 2002, we have been making sure that our clients are
                satisfied with our work.
              </p>
              <button className="btn btn-transparent">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPartner;
