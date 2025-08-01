import React from 'react';

const Home = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-down">
        <h1 className="display-4">Precision Engineering Instruments</h1>
        <p className="lead">Leading the industry in accurate flow measurement and control systems.</p>
        <img src="./assets/landing.png" alt="Hero - Engineering Instruments" className="img-fluid rounded shadow" />
      </section>

      {/* Introduction Section */}
      <section className="mb-5" data-aos="fade-up">
        <h2><i className="bi bi-building text-primary me-2"></i>Who We Are</h2>
        <p>
          Welcome to <strong>YNG Infra</strong> — a pioneer in advanced engineering solutions for fluid measurement and control.
          We design and deliver cutting-edge instrumentation like flowmeters, sensors, and automation components to help industries achieve unmatched precision and efficiency.
        </p>
        <p>
          Our solutions are trusted by professionals across oil & gas, water treatment, chemical, and pharmaceutical sectors. Whether you need a turnkey flow monitoring system or custom-built instruments, we’re here to help.
        </p>
        <a href="/about" className="btn btn-outline-primary mt-3">
          <i className="bi bi-info-circle me-1"></i>Learn More About Us
        </a>
      </section>

      {/* Product Overview */}
      <section className="mb-5" data-aos="zoom-in-up">
        <h2><i className="bi bi-box-seam text-success me-2"></i>Our Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
            <img src="./assets/Ultrasonic.png" alt="Flowmeter Type A" className="img-fluid rounded" />
            <h5 className="mt-2"><i className="bi bi-soundwave me-1"></i>Ultrasonic Flowmeters</h5>
            <p>High-accuracy non-intrusive meters for various fluids, featuring real-time monitoring and minimal maintenance.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <img src="./assets/flow-meter.png" alt="Flowmeter Type B" className="img-fluid rounded" />
            <h5 className="mt-2"><i className="bi bi-lightning-charge me-1"></i>Electromagnetic Flowmeters</h5>
            <p>Ideal for conductive liquids in industrial applications with robust build and digital output compatibility.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <img src="./assets/Turbine-flow.png" alt="Flowmeter Type C" className="img-fluid rounded" />
            <h5 className="mt-2"><i className="bi bi-wind me-1"></i>Turbine Flowmeters</h5>
            <p>Compact and efficient meters for low-viscosity fluids with high repeatability and wide rangeability.</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-5" data-aos="fade-right">
        <h2><i className="bi bi-diagram-3 text-warning me-2"></i>Industries We Serve</h2>
        <ul className="list-unstyled">
          <li><i className="bi bi-droplet-half me-2 text-primary"></i>Oil & Gas</li>
          <li><i className="bi bi-water me-2 text-info"></i>Water and Wastewater</li>
          <li><i className="bi bi-capsule-pill me-2 text-danger"></i>Pharmaceutical Manufacturing</li>
          <li><i className="bi bi-beaker me-2 text-warning"></i>Chemical Processing</li>
          <li><i className="bi bi-cup-straw me-2 text-success"></i>Food & Beverage</li>
        </ul>
        <img src="https://placehold.co/800x250" alt="Industries Served" className="img-fluid mt-3 rounded" />
      </section>

      {/* Why Choose Us */}
      <section className="mb-5" data-aos="fade-left">
        <h2><i className="bi bi-check-circle text-success me-2"></i>Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li><i className="bi bi-patch-check-fill text-success me-2"></i>ISO-certified manufacturing</li>
              <li><i className="bi bi-tools me-2 text-primary"></i>Customized instrumentation solutions</li>
              <li><i className="bi bi-headset me-2 text-info"></i>24/7 Technical Support</li>
              <li><i className="bi bi-truck me-2 text-warning"></i>On-time delivery with global shipping</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="https://placehold.co/400x250" alt="Why Choose Us" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-light py-4 rounded shadow-sm" data-aos="zoom-in">
        <h3><i className="bi bi-envelope-paper text-primary me-2"></i>Ready to optimize your measurement systems?</h3>
        <p>Contact us today to learn more about how we can help your business.</p>
        <a href="/contact" className="btn btn-primary">
          <i className="bi bi-send-fill me-1"></i>Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Home;
