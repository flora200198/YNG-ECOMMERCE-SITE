import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { useCheckout } from '../Context/Context';

const Home = () => {
  const navigate = useNavigate();
  const { products } = useCheckout();

  const NextArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-next "
      onClick={onClick}
    >
      <i className="bi bi-chevron-right custom-arrow"></i>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-prev "
      onClick={onClick}
    >
      <i className="bi bi-chevron-left custom-arrow"></i>
    </div>
  );


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          customPaging: (i) => <button>{i + 1}</button>,  // Custom dot numbering
          appendDots: (dots) => (
            <ul className="slick-dots">
              {dots.slice(0, 4)}
            </ul>
          )
        }
      }
    ]
  };


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
        <h1 className="display-4">Your Nexus Generation - Infra</h1>
        <p className="lead">for smarter tomorrow...</p>
        <img
          src="/assets/Landing.png"
          alt="Hero - Engineering Instruments"
          className="img-fluid rounded shadow hero-image"
        />
      </section>

      {/* Introduction Section */}
      <section className="mb-5" data-aos="fade-up">
        <h2><i className="bi bi-building text-primary me-2"></i>YNG Infra</h2>
        <p>
          At <strong>YNG Infra</strong>, our company policy is built on a foundation of excellence, integrity, and innovation.
          We are committed to delivering high-quality engineering solutions that combine advanced technology with unmatched precision
          to meet the evolving needs of modern industries.
        </p>
        <p>
          Guided by strict international standards, we ensure every product and service reflects our dedication to quality, reliability,
          and customer satisfaction. Our approach focuses on fostering long-term partnerships by understanding our clients’ unique
          requirements and providing customized solutions backed by expert support.
        </p>
        <p>
          We continuously invest in research, development, and technological advancements to create future-ready instrumentation and
          automation systems that improve operational efficiency while adhering to the highest standards of safety, sustainability, and
          regulatory compliance.
        </p>
        <p>
          At YNG Infra, we believe in empowering our people, nurturing ethical practices, and driving innovation to build a culture of
          trust and accountability. With a vision to be a global leader in fluid measurement and industrial automation, we strive to
          deliver solutions that not only enhance performance but also contribute to sustainable growth for our customers and the
          industries we serve.
        </p>

        <a href="/about" className="btn btn-outline-primary mt-3">
          <i className="bi bi-info-circle me-1"></i>Learn More About Us
        </a>
      </section>

      {/* Product Overview */}
      <section className="mb-5" data-aos="zoom-in-up">
        <div className="d-flex justify-content-between align-items-center">
          <h2>
            <i className="bi bi-box-seam text-success me-2"></i>Our Products
          </h2>
          <button
            className="btn btn-link text-decoration-none d-flex align-items-center"
            onClick={() => navigate('/products')}
          >
            View All Products <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>

        <section className="mb-5" data-aos="zoom-in-up">
          <Slider {...settings} className="mt-4">
            {products.map((product, index) => (
              <div key={index} className="p-2">
                <div className="card shadow-sm border-0 h-100 equal-card">
                  <img src={product.image} className="card-img-top p-3" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-2">
              <div
                className="card shadow-sm border-0 h-100 equal-card d-flex align-items-center justify-content-center text-center"
                style={{ cursor: "pointer", background: "#f8f9fa" }}
                onClick={() => navigate('/products')}
              >
                <div className="view-all-content text-center">
                  <h5 className="text-primary mb-2">View All Products</h5>
                  <i className="bi bi-arrow-right-circle display-5 text-primary"></i>
                </div>
              </div>
            </div>

          </Slider>
        </section>
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
          {reasons && reasons[activeIndex] && (
            <div className="col-md-6">
              <h4>{reasons[activeIndex].title}</h4>
              <p>{reasons[activeIndex].description}</p>
            </div>
          )}

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
