import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const industries = [
    {
      title: "Oil & Gas",
      icon: "bi bi-droplet-half text-primary",
      content: "We provide advanced solutions for oil extraction, refining, and pipeline monitoring to ensure efficiency and safety in oil & gas operations.",
      image: "./assets/Oil.png"
    },
    {
      title: "Water and Wastewater",
      icon: "bi bi-water text-info",
      content: "Our water and wastewater solutions help industries maintain compliance, reduce waste, and optimize resource utilization.",
      image: "./assets/Waste-water.png"
    },
    {
      title: "Pharmaceutical Manufacturing",
      icon: "bi bi-capsule-pill text-danger",
      content: "We deliver precision instruments for pharmaceutical production, ensuring quality control and regulatory compliance.",
      image: "./assets/Pharma.png"
    },
    {
      title: "Chemical Processing",
      icon: "bi bi-beaker text-warning",
      content: "Our solutions help monitor and control chemical reactions, enhancing safety and operational efficiency.",
      image: "./assets/Chemical.png"
    },
    {
      title: "Food & Beverage",
      icon: "bi bi-cup-straw text-success",
      content: "We provide hygienic and efficient solutions for food and beverage production to ensure safety and quality.",
      image: "./assets/Food.png"
    }
  ];
  const reasons = [
    {
      icon: "bi bi-patch-check-fill text-success",
      title: "ISO-certified manufacturing",
      description: "We follow strict ISO-certified processes to ensure the highest quality in our manufacturing standards.",
      image: "./assets/ISO.png"
    },
    {
      icon: "bi bi-tools text-primary",
      title: "Customized instrumentation solutions",
      description: "Tailor-made instrumentation solutions designed to meet your specific industrial needs.",
      image: "./assets/Customize.png"
    },
    {
      icon: "bi bi-headset text-info",
      title: "24/7 Technical Support",
      description: "Our expert team is available round the clock to ensure uninterrupted operations for your business.",
      image: "./assets/24.png"
    },
    {
      icon: "bi bi-truck text-warning",
      title: "On-time delivery with global shipping",
      description: "We guarantee on-time delivery with worldwide shipping options for our clients.",
      image: "./assets/delivery.png"
    }
  ];
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5" data-aos="fade-down">
        <h1 className="display-4">Precision Engineering Instruments</h1>
        <p className="lead">Leading the industry in accurate flow measurement and control systems.</p>
        <img
          src="./assets/Landing.png"
          alt="Hero - Engineering Instruments"
          className="img-fluid rounded shadow"
          style={{ width: '100%', display: 'block', margin: '0 auto', height:'70vh' }}
        />
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
            <div className="product-image-container">
              <img src="./assets/Ultrasonic.png" alt="Flowmeter Type A" className="product-image" />
            </div>
            <h5 className="mt-2"><i className="bi bi-soundwave me-1"></i>Ultrasonic Flowmeters</h5>
            <p>High-accuracy non-intrusive meters for various fluids, featuring real-time monitoring and minimal maintenance.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="product-image-container">
              <img src="./assets/flow-meter.png" alt="Flowmeter Type B" className="product-image" />
            </div>
            <h5 className="mt-2"><i className="bi bi-lightning-charge me-1"></i>Electromagnetic Flowmeters</h5>
            <p>Ideal for conductive liquids in industrial applications with robust build and digital output compatibility.</p>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="product-image-container">
              <img src="./assets/Turbine-flow.png" alt="Flowmeter Type C" className="product-image" />
            </div>
            <h5 className="mt-2"><i className="bi bi-wind me-1"></i>Turbine Flowmeters</h5>
            <p>Compact and efficient meters for low-viscosity fluids with high repeatability and wide rangeability.</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mb-5" data-aos="fade-right">
        <div className="container">
          {/* Centered Heading */}
          <div className="text-center mb-4">
            <h2>
              <i className="bi bi-diagram-3 text-warning me-2"></i>
              Industries We Serve
            </h2>
          </div>

          {/* Content and Image Carousel */}
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-md-6">
              <h4>
                <i className={`${industries[activeIndex].icon} me-2`}></i>
                {industries[activeIndex].title}
              </h4>
              <p>{industries[activeIndex].content}</p>
            </div>

            {/* RIGHT IMAGE CAROUSEL */}
            <div className="col-md-6">
              <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
                {industries.map((industry, idx) => (
                  <Carousel.Item key={idx}>
                    <div className="carousel-image-container">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="d-block w-100 carousel-image"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5" data-aos="fade-left">
        <h2 className="text-center mb-4">
          <i className="bi bi-check-circle text-success me-2"></i>
          Why Choose Us?
        </h2>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <h4>
              <i className={`${reasons[activeIndex].icon} me-2`}></i>
              {reasons[activeIndex].title}
            </h4>
            <p>{reasons[activeIndex].description}</p>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="col-md-6">
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={3000} // Auto-slide every 3 sec
            >
              {reasons.map((reason, idx) => (
                <Carousel.Item key={idx}>
                  <div className="carousel-image-container">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="d-block w-100 carousel-image"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
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
