import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ElectroTechnicalPage = ({ data }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = React.useState(false);


  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      <div className="text-center mb-4" data-aos="fade-down">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      <p className="text-secondary" data-aos="fade-up">{data.intro}</p>

      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5" data-aos="fade-up">

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

            {/* BOXED LIST */}
           {type === "boxed-list" && (
  <>
    <h4 className="section-heading">{section.heading}</h4>

    {(() => {
      const isMobile = window.innerWidth < 768;

      // Show only first 4 items on mobile unless showMore = true
      const itemsToShow =
        isMobile && !showMore ? section.list.slice(0, 4) : section.list;

      return (
        <>
          <div className="row g-3">
            {itemsToShow.map((item, i) => (
              <div key={i} className="col-6 col-md-3" data-aos="zoom-in">
                <div
                  className="p-3 shadow-sm rounded text-center fw-semibold"
                  style={{ backgroundColor: "#f0f8ff" }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* Show More button only on Mobile and only if more than 4 items */}
          {isMobile && section.list.length > 4 && (
            <div className="text-center mt-3">
              <button
                className="btn btn-outline-primary btn-sm fw-semibold"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      );
    })()}
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

export default ElectroTechnicalPage;
