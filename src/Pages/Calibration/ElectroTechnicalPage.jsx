import React from "react";
import { useNavigate } from "react-router-dom";

const ElectroTechnicalPage = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      <div className="text-center mb-4">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      <p className="text-secondary">{data.intro}</p>

      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5">

            {/* PARAGRAPH */}
            {type === "paragraph" && (
              <>
                <h4 className="section-heading">{section.heading}</h4>
                {section.content.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </>
            )}

            {/* PROCESS HIGHLIGHT */}
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

            {/* BOXED LIST */}
           {type === "boxed-list" && (
  <>
    <h4 className="section-heading">{section.heading}</h4>
    <div className="row g-3">
      {section.list.map((item, i) => (
        <div key={i} className="col-md-3">
          <div
            className="p-3 shadow-sm rounded text-center fw-semibold"
            style={{ backgroundColor: "#f0f8ff" }} // your card color here
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  </>
)}


          </div>
        );
      })}

      {/* CTA */}
      <div className="mt-5 p-4 bg-light border rounded shadow-sm">
        <h4 className="section-heading">{data.callToAction.title}</h4>
        <p>{data.callToAction.description}</p>
        <button className="btn btn-warning text-dark fw-semibold" onClick={() => navigate("/contact")}>
          {data.callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ElectroTechnicalPage;
