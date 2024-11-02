import React from 'react';
import './Carousel.css';
import poco from './img/poco.png'
import redmi from './img/redmi.png'
import mi from './img/mi.png'

function Carousel() {
  return (


    <div className='divCarousel '>

      
      <div className='container text-center  mt-2 mb-2 '>
        <h1>Últimos lanzamientos</h1>
      </div>
      <div id="demo" className="carousel slide mb-4 align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner position-relative" id='carousel'>
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={poco} alt="POCO X5 5G" className="d-block w-100"></img>
            <div className="carousel-caption d-flex flex-column justify-content-center" id='poco'>
              <h4>Poco X5 5G</h4>
              <p>Tener de todo, lo es todo</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={mi} alt="Xioami 13T" className="d-block w-100" />
            <div className="carousel-caption d-flex flex-column justify-content-center" id='xiaomi'>
              <h4>XIAOMI 13T</h4>
              <p>La esencia de tu obra maestra</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={redmi} alt="Redmi Note 13 pro+ 5g" className="d-block w-100" />
            <div className="carousel-caption d-flex flex-column justify-content-center" id='redmi'>
              <h4>Redmi Note 13 pro+ 5g</h4>
              <p>Unas fotografías de otro mundo</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
