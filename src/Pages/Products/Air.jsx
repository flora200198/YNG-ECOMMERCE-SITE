import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useCheckout } from '../Context/Context';
import './Products.css';

const Air = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useCheckout();

  // Filter Air Quality products
  const airquality = products.filter((product) => product.category === 'Air Quality');

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation runs only once on scroll
      easing: 'ease-in-out', // Smooth easing
    });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-left mb-5 bold" data-aos="fade-down">Air Quality Detectors</h2>

      {airquality && airquality.length > 0 ? (
        <div className="row align-items-center">
          {/* LEFT CONTENT (Animated) */}
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="animated-heading">
              <i className={`bi ${airquality[activeIndex]?.icon || 'bi-gear'} me-2 text-primary`}></i>
              {airquality[activeIndex]?.name || 'Loading...'}
            </h3>
            <p className="animated-text">{airquality[activeIndex]?.description || ''}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL (Animated) */}
          <div className="col-md-6" data-aos="fade-left">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000}
              fade // Smooth fading effect for transitions
            >
              {airquality.map((product, idx) => (
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
        <p className="text-center text-muted" data-aos="fade-up">Loading air quality detectors...</p>
      )}
    </div>
  );
};

export default Air;
