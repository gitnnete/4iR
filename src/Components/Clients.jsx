import React from "react";
import DepEd from "../assets/dbeLogo2.png";
import Absa from "../assets/absa-logo-red-bg.png";
import Sars from "../assets/sars-logos-white.png";
import Dekra from "../assets/logoDekra.png";

const Clients = () => {
  return (
    <>
      <div className="mt-5 bg-danger">
        <h2 className="text-center mb-4">Some of our clients</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <img
                src={DepEd}
                alt="Client 1"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <img
                src={Absa}
                alt="Client 2"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <img
                src={Sars}
                alt="Client 3"
                className="img-fluid client-logo"
              />
            </div>
            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
              <img
                src={Dekra}
                alt="Client 4"
                className="img-fluid client-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
