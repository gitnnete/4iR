import React from "react";

const Location = () => {
  return (
    <>
      <div className="container my-5 pb-5">
        <h1 className="text-center mb-5">Our Location</h1>
        <div className="row">
          {/* Left Div with Google Map */}
          <div className="col-md-6 mb-4">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.742771530903!2d28.24847617539766!3d-25.67982032740335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdf00f1493a13%3A0x9428c8c189c0a784!2sKolonnade%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1724608454486!5m2!1sen!2sza"
                className="embed-responsive-item"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Div with Text Details */}
          <div className="col-md-6">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h3>Pretoria Office</h3>
                <li className="location-list ms-3">123 Main Street</li>
                <li className="location-list ms-3">Pretoria, Gauteng</li>
                <li className="location-list ms-3">South Africa</li>
                <li className="location-list ms-3">0123</li>
              </div>
              <div>
                <h3>Contact Details</h3>
                <li className="location-list">
                  <strong>Office 1:</strong> +27 12 345 6789
                </li>
                <li className="location-list">
                  <strong>Office 2:</strong> +27 12 987 6543
                </li>
                <li className="location-list">
                  <strong>Office 3:</strong> +27 12 567 8901
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
