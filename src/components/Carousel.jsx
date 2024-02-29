import React from "react";

const Carousel = () => {
  return (
    <section
      class="carousel slide "
      id="carouselExampleControls"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/img/banner1.jpg"
            class="d-block w-100 h-50 img-fluid"
            alt="..."
          />
          <div class="carousel-caption ">
            <h1>Traveling Together</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/img/banner2.jpg"
            class="d-block w-100 h-50 img-fluid"
            alt="..."
          />
          <div class="carousel-caption ">
            <h1>Explore New Place</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/img/banner3.jpg"
            class="d-block w-100 h-50 img-fluid"
            alt="..."
          />
          <div class="carousel-caption ">
            <h1>Incredible Place</h1>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Carousel;
