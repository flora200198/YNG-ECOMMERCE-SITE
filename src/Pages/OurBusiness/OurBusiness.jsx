import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurBusiness.css'; // CSS for background animation


const businesses = [
  {
    title: "STP (Sewage Treatment Plant)",
    description: "Design and installation of modern sewage treatment plants for residential, commercial, and industrial needs.",
    image: "https://via.placeholder.com/400x250?text=STP"
  },
  {
    title: "ETP (Effluent Treatment Plant)",
    description: "Comprehensive solutions for treating industrial wastewater and effluents.",
    image: "https://via.placeholder.com/400x250?text=ETP"
  },
  {
    title: "WTP (Water Treatment Plant)",
    description: "Advanced water treatment systems for clean and potable water supply.",
    image: "https://via.placeholder.com/400x250?text=WTP"
  },
  {
    title: "Automation for Schools",
    description: "Smart automation systems to digitize attendance, security, and communication in educational institutions.",
    image: "https://via.placeholder.com/400x250?text=School+Automation"
  },
  {
    title: "Smart Home Solutions",
    description: "Home automation services for lighting, climate, security, and more using IoT technology.",
    image: "https://via.placeholder.com/400x250?text=Smart+Home"
  },
  {
    title: "Consultancy Services",
    description: "Expert consulting in environmental compliance, engineering, and project execution.",
    image: "https://via.placeholder.com/400x250?text=Consultancy"
  },
  {
    title: "Preconstructed Modular Houses",
    description: "Fast and sustainable prefab housing options tailored for modern living.",
    image: "https://via.placeholder.com/400x250?text=Prefab+Houses"
  },
  {
    title: "Turnkey Installation Services",
    description: "End-to-end project installation and commissioning across sectors.",
    image: "https://via.placeholder.com/400x250?text=Installation"
  },
];

const OurBusiness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="business-section text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Business</h2>
          <p className="text-light">Explore the diverse verticals we serve with innovation and excellence.</p>
        </div>

        <div className="row g-4">
          {businesses.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
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
