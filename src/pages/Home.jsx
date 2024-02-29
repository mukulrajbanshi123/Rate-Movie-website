import React from "react";
import { PiSmileyLight, PiSmileyMehLight } from "react-icons/pi";
import { BsFillStarFill, BsPersonCircle } from "react-icons/bs";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Slider Carousel Section */}
      <Carousel />
      {/* Most Popular Tours Section*/}
      <section className="bg-gray py-5">
        <div className="heading text-center px-3 ">
          <h1>Most Popular Tours</h1>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            fugiat quo eius repellendus maiores.
          </p>
        </div>
        <div className="container mb-5">
          <div className="row px-4">
            <div className="col-md-6 col-lg-4 col-12 gap-1 mt-3 ">
              <div className="card">
                <img
                  src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-36-414x261.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body my-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title ">Contrasts of Italy</h5>
                    <h5 className="text-primary fw-bold">$2260</h5>
                  </div>
                  <span className="d-flex text-secondary mb-2">
                    <PiSmileyLight size={25} />
                    <p className="ms-2">7.8 Superb </p>
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo praesentium voluptatibus, non deserunt expedita
                    dolorem!
                  </p>
                  <hr />
                  <Link to="/contact" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 gap-1 mt-3">
              <div className="card">
                <img
                  src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-35-414x261.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body my-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title ">Cuba Sailing Adventure</h5>
                    <h5 className="text-primary fw-bold">$1895</h5>
                  </div>
                  <span className="d-flex text-secondary mb-2">
                    <PiSmileyLight size={25} />
                    <p className="ms-2">8.2 Superb </p>
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo praesentium voluptatibus, non deserunt expedita
                    dolorem!
                  </p>
                  <hr />
                  <Link to="/contact" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 gap-1 mt-3">
              <div className="card">
                <img
                  src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-image-1-414x261.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body my-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title ">Madrid to Rome</h5>
                    <h5 className="text-primary fw-bold">$1580</h5>
                  </div>
                  <span className="d-flex text-secondary mb-2">
                    <PiSmileyMehLight size={25} />
                    <p className="ms-2">6.2 Good </p>
                  </span>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo praesentium voluptatibus, non deserunt expedita
                    dolorem!
                  </p>
                  <hr />
                  <Link to="/contact" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Deals & Discounts Section */}
      <section className=" py-5">
        <div className="container">
          <div className="row my-5 px-4">
            <div className="col-lg-8 col-md-12">
              <div>
                <h1>Deals & Discounts</h1>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  beatae et maxime? Expedita nihil voluptatum quidem ullam odit
                  labore nisi ipsum eveniet eum consequuntur similique
                  perspiciatis laboriosam, praesentium quia architecto.
                </p>
              </div>
              <div className="row mt-3 ">
                <div className="col-lg-6 col-md-12 col-12 gap-3 mt-3">
                  <div className="card overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1575379573806-31ba4f8c7c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                      className="card-img-top position-relativew "
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 ms-4 mb-3 text-white w-100">
                      <span className="d-flex mb-2 ">
                        <PiSmileyLight size={25} />
                        <span className="ms-2">7.8 Superb </span>
                      </span>
                      <div className="d-flex justify-content-between">
                        <h5>Contrasts of Italy</h5>
                        <h5 className=" fw-bold me-5">$2260</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 gap-3 mt-3">
                  <div className="card overflow-hidden">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                      className="card-img-top position-relative"
                      alt="..."
                    />
                    <div className="position-absolute bottom-0 ms-4 mb-3 text-white w-100">
                      <span className="d-flex mb-2 ">
                        <PiSmileyLight size={25} />
                        <span className="ms-2">7.8 Superb </span>
                      </span>
                      <div className="d-flex justify-content-between">
                        <h5>Contrasts of Italy</h5>
                        <h5 className=" fw-bold me-5">$2260</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="card mt-4">
                <div className="card-body px-5 py-5">
                  <h3 className="card-title mb-4 fw-medium fs-2">
                    Top Reviews
                  </h3>
                  <hr />
                  <p className="card-subtitle mb-1 fs-3">Italian Dream Tour</p>
                  <span className="text-danger">
                    <BsFillStarFill className="me-2" />
                    <BsFillStarFill className="me-2" />
                    <BsFillStarFill className="me-2" />
                    <BsFillStarFill className="me-2" />
                    <BsFillStarFill className="me-2" />
                  </span>
                  <p className="card-text mt-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex align-item-center">
                    <span className="me-2">
                      <BsPersonCircle size={25} />
                    </span>
                    <p className="fs-5">Raymond Thomas </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Find Your Perfect Tour Section */}
      <section className="bg-gray py-5">
        <div className="heading text-center px-3 py-4">
          <h1>Find Your Perfect Tour</h1>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            fugiat quo eius repellendus maiores.
          </p>
        </div>
        <Card />
      </section>
      {/* Other Useful Information Section */}
      <section className="container py-5">
        <div className="heading text-center px-3 py-4">
          <h1>Other Useful Information</h1>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            fugiat quo eius repellendus maiores. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Totam, libero.
          </p>
        </div>
        <div className="row px-4">
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="card border-0 ">
              <img
                src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-image-2.jpg"
                className="card-img-top "
                alt="..."
              />
              <div>
                <h5 className="my-3">Special Activities</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nulla eos nemo, deserunt cupiditate veniam! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
                  maxime!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12  ">
            <div className="card border-0 ">
              <img
                src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-image-1.jpg"
                className="card-img-top "
                alt="..."
              />
              <div>
                <h5 className="my-3">Private Guide Tour</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nulla eos nemo, deserunt cupiditate veniam! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
                  maxime ratione odit reiciendis non repellendus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 clasName="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Sightseeing Tour Booking
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa quos quam, deserunt ipsa est earum. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Voluptatem itaque
                    quam iure porro impedit non.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Paris Honeymoon
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga voluptas odio recusandae consequatur repudiandae
                    nesciunt, soluta quae praesentium aperiam consequuntur
                    quibusdam magnam fugit, aliquam a? Iusto illum tenetur
                    delectus quas tempora eveniet doloremque deserunt sint?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    South Africa Adventure
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum illo inventore quod modi quidem sed cum laudantium
                    tenetur quibusdam velit. Magni, quisquam ipsa! Dolores minus
                    nostrum aperiam atque saepe excepturi non est aliquam nulla
                    possimus!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Easter Islands Special Offer
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum illo inventore quod modi quidem sed cum laudantium
                    tenetur quibusdam velit. Magni, quisquam ipsa! Dolores minus
                    nostrum aperiam atque saepe excepturi non est aliquam nulla
                    possimus!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destination Section */}
      <section className="destination-section">
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center py-5">
            <span className="text-white fs-4">
              It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!
            </span>
            <Link to="/contact" className="bookdes text-uppercase">
              Book Destination
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
