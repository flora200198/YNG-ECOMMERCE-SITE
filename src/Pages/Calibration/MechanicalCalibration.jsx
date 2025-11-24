import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Calibration.css";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const MechanicalCalibrationPage = ({ data }) => {
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      {/* PAGE HEADING */}
      <div className="text-center mb-4" data-aos="fade-down">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && (
        <p className="text-secondary" data-aos="fade-up">
          {data.intro}
        </p>
      )}

      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5" data-aos="fade-up">

            {/* Highlight Paragraph */}
            {type === "highlight-paragraph" && (
              <div className="p-4 bg-warning bg-opacity-25 rounded" data-aos="zoom-in">
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="fw-semibold">{p}</p>
                ))}
              </div>
            )}

            {/* Boxed List */}
           {type === "boxed-list" && (
  <>
    <h4 className="section-heading mb-3">{section.heading}</h4>

    <div className="row g-4">
      {section.list.map((item, i) => (
        <BoxItem key={i} item={item} />  // ✔ FIXED: No wrapper here
      ))}
    </div>
  </>
)}


            {/* Process Highlight */}
            {type === "process-highlight" && (
              <div className="card p-4 shadow-sm" data-aos="fade-right">
                <h4 className="section-heading">{section.heading}</h4>
                <ul>
                  {section.list.map((item, i) => {
                    const [title, ...rest] = item.split(":");
                    return (
                      <li key={i}>
                        <strong>{title}:</strong> {rest.join(":")}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Benefits Slider */}
            {type === "benefits-slider" && (
              <div className="mb-4" data-aos="fade-up">

                <h4 className="section-heading mb-3">{section.heading}</h4>

                <div
                  id={`benefits-mech-${index}`}
                  className="carousel slide shadow p-3 rounded bg-white"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {section.slides.map((slide, i) => {
                      const [title, description] = slide.text.split("–");

                      return (
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                        >
                          <div className="row align-items-center">

                            <div className="col-md-6" data-aos="fade-right">
                              <h5 className="fw-bold">{title.trim()}</h5>
                              <p className="text-secondary">{description?.trim()}</p>
                            </div>

                            <div className="col-md-6" data-aos="zoom-in">
                              <img
                                src={slide.image}
                                className="img-fluid rounded shadow d-block mx-auto"
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "260px",
                                  objectFit: "contain",
                                  backgroundColor: "#f8f9fa",
                                  padding: "10px",
                                  borderRadius: "10px"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Slider Arrows */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#benefits-mech-${index}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#benefits-mech-${index}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            )}

            {/* Card Grid */}
            {type === "card-grid" && (
              <>
                <h4 className="section-heading">{section.heading}</h4>
                <div className="row g-3">
                  {section.list.map((item, i) => (
                    <div className="col-md-4" key={i} data-aos="zoom-in">
                      <div
                        className="p-3 shadow-sm rounded text-center h-100 d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "#e9f5ff" }}
                      >
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Paragraph */}
            {type === "paragraph" && (
              <>
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </>
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

export default MechanicalCalibrationPage;



// ===== BoxItem Component =====
const BoxItem = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className="col-md-4 d-flex"
      data-aos="zoom-in"
    >
      <div className="box-item shadow-sm rounded p-3 text-center d-flex flex-column">

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid mb-2 rounded"
            style={{ height: "70px", objectFit: "contain" }}
          />
        )}

        <h6 className="fw-bold">{item.title}</h6>

        <p className={`text-secondary description ${expanded ? "expanded" : ""}`}>
          {item.description}
        </p>

        {item.description.split(" ").length > 10 && (
          <button
            className="btn btn-sm btn-link p-0 mt-auto"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}

      </div>
    </div>
  );
};
