import React from "react";
import { useCheckout } from "../Context/Context";

const MechanicalCalibration = () => {
  const {MechanicalCalibrations} = useCheckout();

  return (
    <div className="container mt-4 mb-5">
      {/* Title & Breadcrumb */}
      <h2 className="fw-bold text-center">{MechanicalCalibrations.title}</h2>
      <p className="text-center text-muted mb-4">{MechanicalCalibrations.breadcrumb}</p>

      {/* Sections */}
      {MechanicalCalibrations.sections.map((section, index) => (
        <div key={index} className="mb-5">
          <h4 className="fw-semibold">{section.heading}</h4>

          {section.text && (
            <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
              {section.text}
            </p>
          )}

          {section.items && (
            <ul className="mt-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.points && (
            <ul className="mt-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <hr />

      {/* Contact Section */}
      <div className="text-center mt-5">
        <h4>{MechanicalCalibrations.contact.cta}</h4>
        <p className="text-muted">{MechanicalCalibrations.contact.text}</p>
        <button className="btn btn-primary px-4">{MechanicalCalibrations.contact.button}</button>
      </div>
    </div>
  );
};

export default MechanicalCalibration;
