import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="container my-5 border-bottom border-secondary">
        <h1 className="text-start mb-5 fw-bold">
          Please feel free to contact our team
        </h1>
        <form>
          <div className="row mb-3">
            <div className="col-md-6 mb-2">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Surname"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <textarea
              className="form-control custom-input"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger w-40 mb-4">
            Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
