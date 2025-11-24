import React, { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

// AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

const ThermalCalibrationPage = ({ data }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = React.useState(false);


  // Initialize animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5 engineering-bg p-4 rounded text-dark">

      {/* HEADER */}
      <div className="text-center mb-4" data-aos="fade-down">
        <h2 className="fw-bold section-heading">{data.title}</h2>
      </div>

      {data.intro && (
        <p className="text-secondary" data-aos="fade-up">
          {data.intro}
        </p>
      )}

      {/* SECTIONS */}
      {data.sections.map((section, index) => {
        const type = section.type;

        return (
          <div key={index} className="mt-5" data-aos="fade-up">

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

            {/* LIST WITH IMAGES */}
            {type === "list" && (
  <>
    <h4 className="section-heading">{section.heading}</h4>

    {(() => {
      const isMobile = window.innerWidth < 768;

      // Show only first 4 cards on mobile unless showMore = true
      const cardsToShow =
        isMobile && !showMore ? section.list.slice(0, 4) : section.list;

      return (
        <>
          <div className="row g-3 mt-2">
            {cardsToShow.map((item, i) => (
              <div className="col-6 col-md-4" key={i} data-aos="zoom-in">
                <div className="card shadow-sm h-100">

                  <img
                    src={item.image}
                    alt={item.text}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      backgroundColor: "#f8f8f8",
                      padding: "10px"
                    }}
                  />

                  <div className="card-body text-center">
                    <p className="card-text text-secondary">{item.text}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Show More button only on mobile and only if more than 4 items */}
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


            {/* PROCESS HIGHLIGHT */}
            {type === "process-highlight" && (
              <div className="card shadow-sm p-4 bg-white" data-aos="fade-right">
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

export default ThermalCalibrationPage;
