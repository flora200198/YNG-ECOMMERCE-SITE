import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-down">
        <h1 className="display-4">About Our Company</h1>
        <p className="lead">Engineering precision for industries worldwide.</p>
        <img src="https://placehold.co/1000x300" alt="Company Overview" className="img-fluid rounded shadow-sm mt-3" />
      </section>

      {/* Mission & Vision */}
      <section className="row mb-5 text-center" data-aos="fade-up">
        <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="p-4 border rounded shadow-sm h-100">
            <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
            <h3>Our Mission</h3>
            <p>To provide innovative, reliable, and high-quality industrial automation and flow measurement solutions that exceed customer expectations.</p>
          </div>
        </div>
        <div className="col-md-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 border rounded shadow-sm h-100">
            <i className="bi bi-binoculars display-4 text-success mb-3"></i>
            <h3>Our Vision</h3>
            <p>To become the global leader in smart industrial instrumentation, known for precision, trust, and innovation.</p>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="mb-4 text-center">Management Team</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay="100">
            <img src="./assets/CEO.png" className="rounded-circle mb-3" alt="John Doe" />
            <h5>John Doe</h5>
            <p>CEO, Founder</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay="200">
            <img src="./assets/Director1.png" className="rounded-circle mb-3" alt="Jane Smith" />
            <h5>Vanamali Ramaswami</h5>
            <p>Director</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-left" data-aos-delay="300">
            <img src="./assets/Director2.png" className="rounded-circle mb-3" alt="Alex Johnson" />
            <h5>Karthik T</h5>
            <p>Director</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-5" data-aos="fade-up">
        <h2 className="mb-4 text-center">Our Achievements</h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <i className="bi bi-award display-4 text-warning mb-3"></i>
              <h5>Top Industry Award 2022</h5>
              <p>Awarded "Top Industrial Automation Company" for excellence in innovation and service delivery.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <i className="bi bi-globe display-4 text-info mb-3"></i>
              <h5>Global Reach</h5>
              <p>Successfully expanded our operations to over 15 countries, serving a diverse range of industries.</p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="p-3 border rounded shadow-sm text-center h-100">
              <i className="bi bi-star-fill display-4 text-danger mb-3"></i>
              <h5>Customer Satisfaction</h5>
              <p>Maintained a 98% satisfaction rating through consistent support and product reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-light p-4 rounded shadow-sm mt-5" data-aos="zoom-in">
        <h4>Want to know more or partner with us?</h4>
        <p>We’d love to hear from you. Let’s create something exceptional together.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </section>
    </div>
  );
};

export default About;
