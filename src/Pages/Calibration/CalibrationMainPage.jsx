import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CalibrationMainPage = ({ data }) => {
  const navigate = useNavigate();

  // Initialize Animation Library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      {/* HEADER */}
      <div className="text-center mb-4" data-aos="fade-down">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && (
        <p className="text-secondary" data-aos="fade-up">
          {data.intro}
        </p>
      )}

      {/* SECTIONS */}
      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5" data-aos="fade-up">

            {/* PARAGRAPH */}
            {type === "paragraph" && (
              <div data-aos="fade-up">
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </div>
            )}

            {/* CARD SECTION */}
            {type === "card" && (
              <div
                className="card shadow-sm p-4 d-flex flex-row align-items-center"
                data-aos="zoom-in"
              >
                <div className="col-md-8">
                  <h4 className="section-heading">{section.heading}</h4>
                  {section.content.map((p, i) => (
                    <p key={i} className="text-secondary">{p}</p>
                  ))}
                  {section.actionButton && (
                    <button
                      className="btn btn-warning text-dark fw-semibold"
                      onClick={() => navigate("/contact")}
                    >
                      {section.actionButton}
                    </button>
                  )}
                </div>

                <div className="col-md-4 p-2" data-aos="fade-left">
                  <img
                    src={section.image}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            )}

            {/* IMAGE-LEFT SECTION */}
            {type === "image-left" && (
              <div className="row shadow-sm p-4 bg-white rounded" data-aos="fade-right">
                <div className="col-md-4">
                  <img src={section.image} className="img-fluid rounded" alt="" />
                </div>
                <div className="col-md-8" data-aos="fade-left">
                  <h4 className="section-heading">{section.heading}</h4>
                  {section.content.map((p, i) => (
                    <p key={i} className="text-secondary">{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* BENEFITS SLIDER */}
            {type === "benefits-slider" && (
              <div className="mb-4" data-aos="fade-up">

                <h4 className="section-heading mb-3">{section.heading}</h4>

                <div
                  id={`benefits-carousel-${index}`}
                  className="carousel slide shadow rounded p-3 bg-white"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">

                    {section.slides.map((slide, i) => {
                      const [title, description] = slide.text.split(":");

                      return (
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                        >
                          <div className="row align-items-center">

                            <div className="col-md-6 p-4" data-aos="fade-right">
                              <h5 className="fw-bold text-dark">{title.trim()}</h5>
                              <p className="text-secondary">{description?.trim()}</p>
                            </div>

                            <div className="col-md-6 p-4 d-flex justify-content-center" data-aos="zoom-in">
                              <img
                                src={slide.image}
                                className="img-fluid rounded shadow"
                                alt=""
                                style={{
                                  height: "260px",
                                  width: "100%",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  borderRadius: "10px"
                                }}
                              />
                            </div>

                          </div>
                        </div>
                      );
                    })}

                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#benefits-carousel-${index}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#benefits-carousel-${index}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>

                </div>
              </div>
            )}

          </div>
        );
      })}

      {/* CTA */}
      <div className="mt-5 p-4 bg-light border rounded shadow-sm" data-aos="fade-up">
        <h4 className="section-heading">{data.callToAction.title}</h4>
        <p>{data.callToAction.description}</p>
        <button
          className="btn btn-warning text-dark fw-semibold"
          onClick={() => navigate("/contact")}
        >
          {data.callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CalibrationMainPage;
