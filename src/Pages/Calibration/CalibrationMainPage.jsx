import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CalibrationMainPage = ({ data }) => {
  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && <p className="text-secondary">{data.intro}</p>}

      {/* SECTIONS */}
      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5">

            {/* PARAGRAPH */}
            {type === "paragraph" && (
              <div>
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </div>
            )}

            {/* CARD SECTION */}
            {type === "card" && (
              <div className="card shadow-sm p-4 d-flex flex-row align-items-center">
                <div className="col-md-8">
                  <h4 className="section-heading">{section.heading}</h4>
                  {section.content.map((p, i) => (
                    <p key={i} className="text-secondary">{p}</p>
                  ))}
                  {section.actionButton && (
                    <button className="btn btn-outline-warning mt-2">
                      {section.actionButton}
                    </button>
                  )}
                </div>

                <div className="col-md-4 p-2">
                  <img src={section.image} className="img-fluid rounded" alt="" />
                </div>
              </div>
            )}

            {/* IMAGE-LEFT SECTION */}
            {type === "image-left" && (
              <div className="row shadow-sm p-4 bg-white rounded">
                <div className="col-md-4">
                  <img src={section.image} className="img-fluid rounded" alt="" />
                </div>
                <div className="col-md-8">
                  <h4 className="section-heading">{section.heading}</h4>
                  {section.content.map((p, i) => (
                    <p key={i} className="text-secondary">{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* BENEFITS SLIDER */}
            {type === "benefits-slider" && (
  <div className="mb-4">

    {/* ⭐ Section Heading (shows once) */}
    <h4 className="section-heading mb-3">{section.heading}</h4>

    <div id={`benefits-carousel-${index}`} className="carousel slide shadow rounded p-3 bg-white">
      <div className="carousel-inner">

        {section.slides.map((slide, i) => {
          const [title, description] = slide.text.split(":"); // split at colon

          return (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <div className="row align-items-center">

                <div className="col-md-6 p-4">

                  {/* ⭐ Card Title */}
                  <h5 className="fw-bold text-dark">{title.trim()}</h5>

                  {/* ⭐ Card Description */}
                  <p className="text-secondary">{description?.trim()}</p>
                </div>

                <div className="col-md-6 p-4 d-flex justify-content-center">
  <img
    src={slide.image}
    className="img-fluid rounded shadow"
    alt=""
    style={{
      height: "260px",       // fixed height for all images
      width: "100%",         // keep full width
      objectFit: "cover",    // crop instead of stretching
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

      <button className="carousel-control-prev" type="button"
        data-bs-target={`#benefits-carousel-${index}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button"
        data-bs-target={`#benefits-carousel-${index}`} data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  </div>
)}


          </div>
        );
      })}

      {/* CTA */}
      <div className="mt-5 p-4 bg-light border rounded shadow-sm">
        <h4 className="section-heading">{data.callToAction.title}</h4>
        <p>{data.callToAction.description}</p>
        <button className="btn btn-warning text-dark fw-semibold">
          {data.callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CalibrationMainPage;
