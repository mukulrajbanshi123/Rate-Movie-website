import React, { useEffect } from "react";
import Data from "../Data/Gallery";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="gallery">
      <div>
        <img
          src="https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/tour-standard-list-title-img.jpg"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="container">
        <div className="my-5">
          <div className="text-center">
            <h3>Gallery Section</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              quas recusandae molestiae minima sapiente velit?
            </p>
          </div>
          <div className="row gy-4 my-4 px-4">
            {Data.map((item) => (
              <div className="col-lg-4 col-md-6 col-12 " key={item.id}>
                <div className="overflow-hidden">
                  <img src={item.image} class="img-fluid " alt="..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
