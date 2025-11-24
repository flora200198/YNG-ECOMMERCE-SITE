import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Calibration.css";
import { useNavigate } from "react-router-dom";

const MechanicalCalibrationPage = ({ data }) => {
const navigate = useNavigate();

  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      <div className="text-center mb-4">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && <p className="text-secondary">{data.intro}</p>}

      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5">

            {type === "highlight-paragraph" && (
              <div className="p-4 bg-warning bg-opacity-25 rounded">
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="fw-semibold">{p}</p>
                ))}
              </div>
            )}

            {type === "boxed-list" && (
              <>
                <h4 className="section-heading mb-3">{section.heading}</h4>

                <div className="row g-4">
                  {section.list.map((item, i) => (
                    <BoxItem key={i} item={item} />
                  ))}
                </div>
              </>
            )}

            {/* Process Highlight */}
           {type === "process-highlight" && (
  <div className="card p-4 shadow-sm">
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
  <div className="mb-4">

    {/* ✅ Section Heading ABOVE the carousel */}
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

                <div className="col-md-6">

                  {/* Only the BENEFIT TITLE inside each slide */}
                  <h5 className="fw-bold">{title.trim()}</h5>

                  <p className="text-secondary">
                    {description?.trim()}
                  </p>

                </div>

                <div className="col-md-6">
                  <img
  src={slide.image}
  className="img-fluid rounded shadow d-block mx-auto"
  alt=""
  style={{
    width: "100%",
    height: "260px",        // fixed height (adjust as you like)
    objectFit: "contain",   // keeps full image visible, no cropping
    backgroundColor: "#f8f9fa", // light background for empty space
    padding: "10px",        // optional: gives clean spacing around image
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
        <div className="col-md-4 " key={i}>
         <div className="p-3 shadow-sm rounded text-center h-100 d-flex align-items-center justify-content-center"
     style={{ backgroundColor: "#e9f5ff" }}>
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
      <div className="mt-5 p-4 bg-light border rounded shadow-sm">
        <h4 className="section-heading">{data.callToAction.title}</h4>
        <p>{data.callToAction.description}</p>
        <button className="btn btn-warning text-dark fw-semibold"  onClick={() => navigate("/contact")}>
          {data.callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default MechanicalCalibrationPage;


// ========== BoxItem COMPONENT (inside same file) ==========
const BoxItem = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="col-md-4 d-flex">
      <div className="box-item shadow-sm rounded p-3 text-center d-flex flex-column">

        {/* IMAGE */}
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid mb-2 rounded"
            style={{ height: "70px", objectFit: "contain" }}
          />
        )}

        {/* TITLE */}
        <h6 className="fw-bold">{item.title}</h6>

        {/* DESCRIPTION */}
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
