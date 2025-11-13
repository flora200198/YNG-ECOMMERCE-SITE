// CalibrationServices.js
import React from "react";
import { calibrationContent } from "../context/CalibrationContext";

const CalibrationServices = () => {
  const content = calibrationContent;

  return (
    <div className="container mt-4 mb-5">
      <h2 className="fw-bold text-center mb-2">{content.title}</h2>
      <p className="text-center text-muted mb-4">{content.breadcrumb}</p>

      <input
        type="text"
        placeholder={content.searchPlaceholder}
        className="form-control mb-5"
      />

      {content.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h4 className="fw-semibold">{section.heading}</h4>
          {section.text && <p>{section.text}</p>}

          {section.subtopics &&
            section.subtopics.map((sub, i) => (
              <div key={i} className="ms-3">
                <h6 className="fw-semibold mt-3">{sub.subheading}</h6>
                <p>{sub.text}</p>
              </div>
            ))}

          {section.points && (
            <ul>
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {section.labs && (
            <ul>
              {section.labs.map((lab, i) => (
                <li key={i}>{lab}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <hr />
      <div className="mt-5">
        <h4>{content.contact.cta}</h4>
        <p>{content.contact.text}</p>

        <form className="row g-3">
          {content.contact.formFields.map((field, i) => (
            <div className="col-md-6" key={i}>
              <label className="form-label">{field}</label>
              <input type="text" className="form-control" />
            </div>
          ))}

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {content.contact.consentText}
              </label>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalibrationServices;
