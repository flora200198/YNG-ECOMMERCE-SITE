import React from 'react';
import 'aos/dist/aos.css';

const Products = () => {
  const products = [
    {
      name: 'Flow Meters',
      icon: 'bi-droplet-half',
      description: 'High accuracy flow measurement devices used in industrial and commercial applications.',
      image: 'https://placehold.co/600x400',
    },
    {
      name: 'Pressure Transmitters',
      icon: 'bi-speedometer2',
      description: 'Reliable solutions for measuring pressure in harsh industrial environments.',
      image: 'https://placehold.co/600x400',
    },
    {
      name: 'Level Transmitters',
      icon: 'bi-box-arrow-down',
      description: 'Advanced devices for accurate level measurement in tanks and vessels.',
      image: 'https://placehold.co/600x400',
    },
    {
      name: 'Strainers',
      icon: 'bi-filter-circle',
      description: 'High-quality strainers to protect your pipeline equipment from debris and particles.',
      image: 'https://placehold.co/600x400',
    },
    {
      name: 'Temperature Transmitters',
      icon: 'bi-thermometer-half',
      description: 'Precision instruments for monitoring and transmitting temperature readings.',
      image: 'https://placehold.co/600x400',
    },
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
