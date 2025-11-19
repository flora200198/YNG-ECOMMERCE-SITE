import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MechanicalCalibrationPage = ({ data }) => {
  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      <div className="text-center mb-4">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && <p>{data.intro}</p>}

      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5">

            {/* HIGHLIGHT PARAGRAPH */}
            {type === "highlight-paragraph" && (
              <div className="p-4 bg-warning bg-opacity-25 rounded">
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="fw-semibold">{p}</p>
                ))}
              </div>
            )}

            {/* BOXED LIST */}
            {type === "boxed-list" && (
              <>
                <h4 className="section-heading">{section.heading}</h4>
                <div className="row g-3">
                  {section.list.map((item, i) => (
                    <div key={i} className="col-md-2">
                      <div className="p-3 bg-white shadow-sm rounded text-center fw-semibold">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* PROCESS HIGHLIGHT */}
            {type === "process-highlight" && (
              <div className="card p-4 shadow-sm">
                <h4 className="section-heading">{section.heading}</h4>
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i} className="fw-bold">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* BENEFITS SLIDER (content left, image right) */}
            {type === "benefits-slider" && (
              <div id={`benefits-mech-${index}`} className="carousel slide shadow p-3 rounded bg-white">
                <div className="carousel-inner">
                  {section.slides.map((slide, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <h4 className="section-heading">{section.heading}</h4>
                          <p className="text-secondary">{slide.text}</p>
                        </div>
                        <div className="col-md-6">
                          <img src={slide.image} className="img-fluid rounded shadow" alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="carousel-control-prev" type="button"
                  data-bs-target={`#benefits-mech-${index}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button"
                  data-bs-target={`#benefits-mech-${index}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            )}

            {/* CARD GRID (Applications) */}
            {type === "card-grid" && (
              <>
                <h4 className="section-heading">{section.heading}</h4>
                <div className="row g-3">
                  {section.list.map((item, i) => (
                    <div className="col-md-2" key={i}>
                      <div className="p-3 shadow-sm rounded bg-white text-center">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* PARAGRAPH */}
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

export default MechanicalCalibrationPage;
