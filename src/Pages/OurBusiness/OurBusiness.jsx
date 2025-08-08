import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurBusiness.css'; // CSS for background animation
import { useCheckout } from '../Context/Context';




const OurBusiness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { businesses } = useCheckout();

  return (
    <section className="business-section text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Business</h2>
          <p className="text-light">Explore the diverse verticals we serve with innovation and excellence.</p>
        </div>

        <div className="row g-4">
          {Array.isArray(businesses) && businesses.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item?.image}
                  className="card-img-top"
                  alt={item?.title || ''}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <p className="card-text">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBusiness;
