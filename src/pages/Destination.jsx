import React, { useEffect } from "react";
import Data from "../Data/Destination";
const OurTour = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="destination">
      <div className="container">
        <div className="text-center py-5">
          <h2>Choose Your Destination</h2>
          <p className="my-3 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure,
            ipsum commodi quisquam quas esse dignissimos.
          </p>
        </div>
        <div className="row mb-5 gy-4 px-4">
          {Data.map((item) => (
            <div className="col-lg-3 col-md-6 col-12 " key={item.id}>
              <div className=" d-flex justify-content-center align-items-center">
                <div className="img-cont">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
                <h3 className="position-absolute text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTour;
