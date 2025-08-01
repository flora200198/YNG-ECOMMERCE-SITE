import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useCheckout } from '../Context/Context';
import './Products.css';

const Flowmeter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useCheckout();

  // Filter only Flow Meter category products
  const flowmeter = products.filter((product) => product.category === 'Flow');

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Run animation only once
      easing: 'ease-in-out', // Smooth easing
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-left mb-5" data-aos="fade-down">Flow Meter</h1>

      {flowmeter && flowmeter.length > 0 ? (
        <div className="row align-items-center">
          {/* LEFT CONTENT (Animated) */}
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="animated-heading">
              <i className={`bi ${flowmeter[activeIndex]?.icon || 'bi-gear'} me-2 text-primary`}></i>
              {flowmeter[activeIndex]?.name || 'Loading...'}
            </h3>
            <p className="animated-text">{flowmeter[activeIndex]?.description || ''}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL (Animated) */}
          <div className="col-md-6" data-aos="fade-left">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000} // auto-slide every 3 seconds
              fade // smooth fade effect for slides
            >
              {flowmeter.map((product, idx) => (
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
        <p className="text-center text-muted" data-aos="fade-up">Loading flow meters...</p>
      )}
    </div>
  );
};

export default Flowmeter;
