import React from "react";
import { PiSmileyLight, PiSmileyMehLight } from "react-icons/pi";
import Data from "../Data/Tour";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="container mb-5 ">
      <div className="row px-4 gy-4">
        {Data.map((item) => (
          <div className="col-md-6 col-lg-4 col-12 gap-2 " key={item.id}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body my-2">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title ">{item.title}</h5>
                  <h5 className="text-primary fw-bold">${item.price}</h5>
                </div>
                <span className="d-flex text-secondary mb-2">
                  {item.rating.rate > 7 ? (
                    <PiSmileyLight size={25} />
                  ) : (
                    <PiSmileyMehLight size={25} />
                  )}
                  <p className="ms-2">
                    {item.rating.rate} {item.rating.label}{" "}
                  </p>
                </span>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                  praesentium voluptatibus, non deserunt expedita dolorem!
                </p>
                <hr />
                <Link to="/contact" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
