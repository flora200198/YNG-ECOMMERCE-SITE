import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useCheckout } from '../Context/Context';
import './Products.css';

const Analysers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useCheckout();

  // Filter only analyzer category products
  const analyzers = products.filter((product) => product.category === 'Analyzer');

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-left mb-5" data-aos="fade-down">
        Analysers
      </h2>

      {analyzers && analyzers.length > 0 ? (
        <div className="row align-items-center">
          {/* LEFT CONTENT (Product Details) */}
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="animated-heading">
              <i className={`bi ${analyzers[activeIndex]?.icon || 'bi-gear'} me-2 text-primary`}></i>
              {analyzers[activeIndex]?.name || 'Loading...'}
            </h3>
            <p className="animated-text">{analyzers[activeIndex]?.description || ''}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="col-md-6" data-aos="fade-left">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000}
              fade
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ filter: 'invert(50%)' }} />}
              prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ filter: 'invert(50%)' }} />}
            >
              {analyzers.map((product, idx) => (
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
        <p className="text-center text-muted" data-aos="fade-up">Loading analysers...</p>
      )}
    </div>
  );
};

export default Analysers;
