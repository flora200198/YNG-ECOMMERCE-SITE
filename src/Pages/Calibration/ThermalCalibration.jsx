import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ThermalCalibrationPage = ({ data }) => {
  
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

            {/* HIGHLIGHT PARAGRAPH */}
            {type === "highlight-paragraph" && (
              <div className="p-4 bg-warning bg-opacity-25 rounded shadow-sm">
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="text-dark fw-semibold">{p}</p>
                ))}
              </div>
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

            {/* LIST */}
           {type === "list" && (
  <>
    <h4 className="section-heading">{section.heading}</h4>

    <div className="row g-3 mt-2">
      {section.list.map((item, i) => (
        <div className="col-md-4" key={i}>
          <div className="card shadow-sm h-100">

            <img
              src={item.image}
              alt={item.text}
              className="card-img-top"
              style={{
  width: "100%",
  height: "180px",
  objectFit: "contain",   // shows full image
  backgroundColor: "#f8f8f8", // optional: fill empty space
}}

            />

            <div className="card-body text-center">
              <p className="card-text text-secondary">{item.text}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  </>
)}

            {/* PROCESS HIGHLIGHT */}
            {type === "process-highlight" && (
              <div className="card shadow-sm p-4 bg-white">
                <h4 className="section-heading">{section.heading}</h4>
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i} className="fw-semibold text-dark">{item}</li>
                  ))}
                </ul>
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

export default ThermalCalibrationPage;
