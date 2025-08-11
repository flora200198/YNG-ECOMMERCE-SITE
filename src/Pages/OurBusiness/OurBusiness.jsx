// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './OurBusiness.css'; // CSS for background animation
// import { useCheckout } from '../Context/Context';
// import { Link } from 'react-router-dom'; // ✅ for navigation

// const OurBusiness = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const { businesses } = useCheckout();

//   return (
//     <>
//       <section className="business-section text-white py-5">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="fw-bold">Our Business</h2>
//             <p className="text-light">Explore the diverse verticals we serve with innovation and excellence.</p>
//           </div>

//           <div className="row g-4">
//             {Array.isArray(businesses) && businesses.map((item, index) => {
//               const to =
//                 item?.routeLink
//                   ? item.routeLink
//                   : item?.slug
//                   ? `/business/${item.slug}`
//                   : '#';

//               return (
//                 <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up">
//                   <Link to={to} className="text-decoration-none text-dark d-block h-100">
//                     <div className="card h-100 shadow-sm border-0">
//                       <img
//                         src={item?.image}
//                         className="card-img-top business-img" // ✅ style via CSS
//                         alt={item?.title || 'Business'}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{item?.title}</h5>
//                         <p className="card-text">{item?.description}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="text-center bg-light py-4 rounded shadow-sm" data-aos="zoom-in">
//         <h3><i className="bi bi-envelope-paper text-primary me-2"></i>Let’s work together to drive your business forward.</h3>
//         <p>Contact us today.</p>
//         <a href="/contact" className="btn btn-primary">
//           <i className="bi bi-send-fill me-1"></i>Connect with Us
//         </a>
//       </section>
//     </>
//   );
// };

// export default OurBusiness;

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurBusiness.css';
import { useCheckout } from '../Context/Context';
import { Link } from 'react-router-dom';

const toSlug = (str = '') =>
  str.toLowerCase().trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const OurBusiness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { businesses } = useCheckout(); // ✅ use the full list

  return (
    <>
      <section className="business-section text-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Business</h2>
            <p className="text-light">Explore the diverse verticals we serve with innovation and excellence.</p>
          </div>

          <div className="row g-4">
            {Array.isArray(businesses) && businesses.map((item, index) => {
              const slug = item?.slug || toSlug(item?.title);
              const to = `/business/${slug}`;

              return (
                <div className="col-md-6 col-lg-4" key={slug || index} data-aos="fade-up">
                  <Link to={to} className="text-decoration-none text-dark d-block h-100">
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={item?.image}
                        className="card-img-top business-img"
                        alt={item?.title || 'Business'}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item?.title}</h5>
                        <p className="card-text">{item?.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="text-center bg-light py-4 rounded shadow-sm" data-aos="zoom-in">
        <h3><i className="bi bi-envelope-paper text-primary me-2"></i>Let’s work together to drive your business forward.</h3>
        <p>Contact us today.</p>
        <a href="/contact" className="btn btn-primary">
          <i className="bi bi-send-fill me-1"></i>Connect with Us
        </a>
      </section>
    </>
  );
};

export default OurBusiness;
