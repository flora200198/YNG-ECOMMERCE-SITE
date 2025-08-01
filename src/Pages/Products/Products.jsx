import React from 'react';
import 'aos/dist/aos.css';

const Products = () => {
 const products = [
  {
    name: 'Flow Meters',
    icon: 'bi-droplet-half',
    description: 'Comprehensive range including electromagnetic, vortex, ultrasonic, Coriolis mass, thermal mass, multi-jet, and AMR-compatible water meters for accurate flow measurement in industrial and utility applications.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Pressure Transmitters',
    icon: 'bi-speedometer2',
    description: 'Smart and differential pressure transmitters designed for high-precision pressure measurement in liquid, gas, and harsh industrial processes with HART/RS485 outputs.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Level Transmitters',
    icon: 'bi-box-arrow-down',
    description: 'Wide range of ultrasonic, radar, guided radar, magnetostrictive, capacitance, and hydrostatic level transmitters for liquids and solids in tanks, silos, and reservoirs.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Temperature Transmitters',
    icon: 'bi-thermometer-half',
    description: 'RTD, thermocouple sensors, and DIN/head mount temperature transmitters for precise temperature monitoring in industrial processes with universal input compatibility.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Strainers',
    icon: 'bi-filter-circle',
    description: 'Durable MS/SS strainers for pipeline protection, available in various sizes to filter debris and particles in liquid flow applications.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Water Quality Analyzers',
    icon: 'bi-water',
    description: 'Online and laboratory analyzers including pH/ORP, turbidity, conductivity, chlorine, dissolved oxygen, silica, phosphate, and hardness analyzers for water treatment and environmental monitoring.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Air Quality Monitoring Systems',
    icon: 'bi-wind',
    description: 'Continuous air quality monitoring stations (AQMS) for dust, particulate matter, and pollutants with compliance to environmental standards.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Gas Analyzers & CEMS',
    icon: 'bi-cloud-drizzle',
    description: 'Continuous emission monitoring systems (CEMS) and gas analyzers using NDIR, UV, and chemiluminescent technologies for industrial stack emission measurement (SOx, NOx, CO, CO2, etc.).',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Seamless Data Transfer (SDT)',
    icon: 'bi-diagram-3',
    description: 'Data acquisition and remote monitoring system supporting multiple channels, real-time logging, web publishing, SMS/email alerts, and seamless SCADA integration.',
    image: 'https://placehold.co/600x400',
  },
  {
    name: 'Proximity & Inductive Sensors',
    icon: 'bi-broadcast-pin',
    description: 'Industrial-grade proximity and inductive sensors for non-contact detection and automation applications, featuring high protection and reliable operation.',
    image: 'https://placehold.co/600x400',
  }
];


  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Products</h1>

      {products.map((product, index) => (
        <div
          key={index}
          className="row align-items-center mb-5"
          data-aos="fade-up"
        >
          {/* Alternate image and text sides */}
          {index % 2 === 0 ? (
            <>
              <div className="col-md-6 mb-3">
                <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6">
                <h3>
                  <i className={`bi ${product.icon} me-2 text-primary`}></i>
                  {product.name}
                </h3>
                <p>{product.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 order-md-2 mb-3">
                <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6 order-md-1">
                <h3>
                  <i className={`bi ${product.icon} me-2 text-primary`}></i>
                  {product.name}
                </h3>
                <p>{product.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
