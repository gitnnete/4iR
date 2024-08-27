import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Products = () => {
  const products = [
    {
      icon: "fas fa-laptop",
      title: "Product 1",
      description:
        "We have figured out multiple ways for your business to thrive under our supervision",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Product 2",
      description:
        "Our team has identified various methods to help your business succeed with our support.",
    },
    {
      icon: "fas fa-cloud",
      title: "Product 3",
      description:
        "We have uncovered several approaches to boost your business growth under our expertise.",
    },
    {
      icon: "fas fa-network-wired",
      title: "Product 4",
      description:
        "Our expertise offers multiple pathways for your business to prosper under our direction.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Product 5",
      description:
        "We’ve crafted various solutions to drive your business success with our expert oversight.",
    },
    {
      icon: "fas fa-cogs",
      title: "Product 6",
      description:
        "We have devised several plans to make your business thrive with our leadership.",
    },
  ];

  useEffect(() => {
    // Initialize Bootstrap carousel
    const carouselElement = document.querySelector("#carouselExampleControls");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <>
      <div className="text-center pt-5 pb-3">
        <h1 className=" fs-3">Our Products</h1>
      </div>

      <div className="text-center pb-3">
        {/* For large screens */}
        <div className="row d-none d-md-flex">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 border rounded">
                <div className="text-center mb-3">
                  <i className={`${product.icon} fa-2x`}></i>
                </div>
                <h5 className="text-center">{product.title}</h5>
                <p className="text-center">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For small screens */}
        <div
          id="carouselExampleControls"
          className="carousel slide d-md-none"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products.map((product, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="p-4 border rounded text-center border-secondary">
                  <i className={`${product.icon} fa-2x mb-3`}></i>
                  <h5>{product.title}</h5>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="text-center pb-5 mt-3">
        <Link to="/ContactUs" className="products-button">Contact Us</Link>
      </div>
    </>
  );
};
export default Products;
