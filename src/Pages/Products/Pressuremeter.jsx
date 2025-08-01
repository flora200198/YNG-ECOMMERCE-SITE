import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useCheckout } from '../Context/Context';
import './Products.css';

const Pressuremeter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useCheckout();

  // Filter only Pressure category products
  const pressuremeter = products.filter((product) => product.category === 'Pressure');

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
      easing: 'ease-in-out', // Smooth easing
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-left mb-5" data-aos="fade-down">Pressure Meter</h1>

      {pressuremeter && pressuremeter.length > 0 ? (
        <div className="row align-items-center">
          {/* LEFT CONTENT (Animated) */}
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="animated-heading">
              <i className={`bi ${pressuremeter[activeIndex]?.icon || 'bi-gear'} me-2 text-primary`}></i>
              {pressuremeter[activeIndex]?.name || 'Loading...'}
            </h3>
            <p className="animated-text">{pressuremeter[activeIndex]?.description || ''}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL (Animated) */}
          <div className="col-md-6" data-aos="fade-left">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000} // auto-slide every 3 seconds
              fade // smooth fade effect for transitions
            >
              {pressuremeter.map((product, idx) => (
                <Carousel.Item key={idx}>
                  <div className="carousel-image-container zoom-effect">
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
        <p className="text-center text-muted" data-aos="fade-up">Loading pressure meters...</p>
      )}
    </div>
  );
};

export default Pressuremeter;
