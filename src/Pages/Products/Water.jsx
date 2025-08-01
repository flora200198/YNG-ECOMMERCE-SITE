import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import { useCheckout } from '../Context/Context';
import './Products.css';

const Water = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useCheckout();

const waterquality = products.filter((product) => product.category === 'Water');

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Water Quality Detectors</h1>

      {/* Check if analyzers array has data */}
      {waterquality&& waterquality.length > 0 ? (
        <div className="row align-items-center">
          {/* LEFT CONTENT (Product Details) */}
          <div className="col-md-6">
            <h3>
              <i className={`bi ${waterquality[activeIndex]?.icon || 'bi-gear'} me-2 text-primary`}></i>
              {waterquality[activeIndex]?.name || 'Loading...'}
            </h3>
            <p>{waterquality[activeIndex]?.description || ''}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="col-md-6">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000} // auto-slide every 3 seconds
            >
              {waterquality.map((product, idx) => (
                <Carousel.Item key={idx}>
                  <div className="carousel-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="d-block w-100 carousel-image rounded shadow"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      ) : (
        <p className="text-center text-muted">Loading analysers...</p>
      )}
    </div>
  );
};

export default Water;
