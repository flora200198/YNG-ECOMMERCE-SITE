import React from "react";

const ElectroTechnicalPage = ({ data }) => {
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
              <div className="card p-4 shadow">
                <h4 className="section-heading">{section.heading}</h4>
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i} className="fw-semibold">{item}</li>
                  ))}
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
                      <div className="p-3 bg-white shadow-sm rounded text-center fw-semibold">
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
        <button className="btn btn-warning text-dark fw-semibold">
          {data.callToAction.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ElectroTechnicalPage;
