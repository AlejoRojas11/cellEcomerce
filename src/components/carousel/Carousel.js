import React from 'react';
import './Carousel.css';
import poco from './img/poco.png'
import redmi from './img/redmi.png'
import mi from './img/mi.png'
import blackd from './img/BlackD.jpg'
import blackd2 from './img/BlackD2.jpg'
import blackd3 from './img/blackD3.jpg'


function Carousel() {
  return (


    <div className='divCarousel '>

      
      <div className='container text-center  mt-2 mb-2 '>
        <h1>Black Day</h1>
      </div>
      <div id="demo" className="carousel slide mb-4 align-items-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner position-relative" id='carousel'>
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={blackd3} alt="POCO X5 5G" className="d-block w-100"></img>
            <div className="carousel-caption d-flex flex-column justify-content-center" id='poco'>
             
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={blackd2} alt="Xioami 13T" className="d-block w-90" />
            <div className="carousel-caption d-flex flex-column justify-content-center" id='xiaomi'>
             
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={blackd} alt="" className="d-block w-90" />
            <div className="carousel-caption d-flex flex-column justify-content-center" id='redmi'>
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
