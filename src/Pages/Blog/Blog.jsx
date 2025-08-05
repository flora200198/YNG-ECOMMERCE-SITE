import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import './Blog.css'; // Assuming you have a CSS file for styling

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4" data-aos="fade-down">Our Product Insights & Blog</h1>
      <p className="text-center mb-5 lead" data-aos="fade-up">
        Explore expert insights, guides, and updates on industrial instruments, flow meters, analyzers, 
        and measurement technologies to help you choose the right solutions for your needs.
      </p>

      {/* Blog Article 1 */}
      <div className="row mb-5 align-items-center"> 
        <div className="col-md-6" data-aos="fade-right">
          <img 
            src="/assets/flow.png" 
            alt="Flow Meter Insights" 
            className="img-fluid rounded shadow blog-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3>Understanding Flow Meters: Types and Applications</h3>
          <p>
            Flow meters are essential instruments used across industries like water treatment, oil & gas, 
            pharmaceuticals, and food processing to measure fluid flow accurately. From  
            <strong> Electromagnetic Flow Meters</strong> for conductive liquids to 
            <strong> Ultrasonic Clamp-On Flow Meters</strong> for large pipelines, selecting the right 
            flow meter ensures precise monitoring, reduced wastage, and operational efficiency.
          </p>
          <a href="#read-more-flow" className="btn btn-outline-primary mt-2">
            <i className="bi bi-book me-2"></i> Read More
          </a>
        </div>
      </div>

      {/* Blog Article 2 */}
      <div className="row mb-5 align-items-center flex-md-row-reverse">
        <div className="col-md-6" data-aos="fade-left">
          <img 
            src="/assets/Analyzers.png" 
            alt="Water Quality Detectors" 
            className="img-fluid rounded shadow blog-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-right">
          <h3>Importance of Water Quality Analyzers</h3>
          <p>
            Water quality analyzers, including <strong>pH/ORP, turbidity, and chlorine analyzers</strong>, 
            are crucial for industries maintaining stringent water standards. They help ensure safe water 
            supply in municipal systems, industrial plants, and wastewater facilities by providing 
            real-time, reliable monitoring data.
          </p>
          <a href="#read-more-water" className="btn btn-outline-success mt-2">
            <i className="bi bi-book me-2"></i> Read More
          </a>
        </div>
      </div>

      {/* Blog Article 3 */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <img 
            src="/assets/Air-monitoring.png" 
            alt="Air Quality Monitoring" 
            className="img-fluid rounded shadow blog-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h3>Air Quality Monitoring: Keeping Compliance in Check</h3>
          <p>
            With increasing environmental regulations, <strong>Air Quality Monitoring Systems (AQMS)</strong> 
            and <strong>Continuous Emission Monitoring Systems (CEMS)</strong> have become indispensable. 
            These systems track particulate matter, gases like SOx and NOx, and ensure industries meet 
            compliance requirements for emissions.
          </p>
          <a href="#read-more-air" className="btn btn-outline-warning mt-2">
            <i className="bi bi-book me-2"></i> Read More
          </a>
        </div>
      </div>

      {/* Blog Article 4 */}
      <div className="row mb-5 align-items-center flex-md-row-reverse">
        <div className="col-md-6" data-aos="fade-left">
          <img 
            src="/assets/Pressure-meter.png" 
            alt="Pressure and Level Sensors" 
            className="img-fluid rounded shadow blog-image"
          />
        </div>
        <div className="col-md-6" data-aos="fade-right">
          <h3>Pressure & Level Measurement: Enhancing Process Control</h3>
          <p>
            Accurate pressure and level monitoring is vital for chemical, oil & gas, and manufacturing plants. 
            Devices such as <strong>Smart Pressure Transmitters</strong> and <strong>Radar Level Sensors</strong> 
            ensure better process control, safety, and automation in industrial environments.
          </p>
          <a href="#read-more-pressure" className="btn btn-outline-danger mt-2">
            <i className="bi bi-book me-2"></i> Read More
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5" data-aos="zoom-in">
        <h4>Looking for Expert Guidance?</h4>
        <p className="mb-3">Contact our specialists to help you choose the right instrumentation solutions for your business.</p>
        <a href="/contact" className="btn btn-primary">
          <i className="bi bi-chat-dots me-2"></i> Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Blog;
