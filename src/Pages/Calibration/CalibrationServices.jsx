// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { useCheckout } from "../Context/Context"; 
// import './Calibration.css';


// const CalibrationPage = () => {
//   const { category } = useParams();
//   const { calibrationServicesData } = useCheckout();

//   // find the data for the current category
//   const data = calibrationServicesData.find(
//     (item) => item.category === category
//   );

//   if (!data) {
//     return (
//       <div className="container mt-5 text-center">
//         <h4>Calibration Service not found</h4>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-5">
//       {/* Header */}
//       <h2 className="fw-bold">{data.title}</h2>
//       <p className="text-muted mb-4">{data.breadcrumb}</p>
//       {data.intro && <p>{data.intro}</p>}

//       {/* Sections */}
//       {data.sections.map((section, index) => (
//         <div key={index} className="mt-4">
//           <h4 className="fw-semibold">{section.heading}</h4>

//           {/* Content paragraphs */}
//           {section.content &&
//             section.content.map((para, i) => (
//               <p key={i} className="text-secondary">
//                 {para}
//               </p>
//             ))}

//           {/* List items */}
//           {section.list && (
//             <ul>
//               {section.list.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           )}

//           {/* Action button */}
//           {section.actionButton && (
//             <button className="btn btn-outline-primary mt-2">
//               {section.actionButton}
//             </button>
//           )}
//         </div>
//       ))}

//       {/* Call to Action */}
//       {data.callToAction && (
//         <div className="mt-5 p-4 bg-light border rounded">
//           <h4>{data.callToAction.title}</h4>
//           <p>{data.callToAction.description}</p>
//           <button className="btn btn-primary">
//             {data.callToAction.buttonText}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalibrationPage;


import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useCheckout } from "../Context/Context"; 
import './Calibration.css';


const CalibrationPage = () => {
  const { category } = useParams();
  const { calibrationServicesData } = useCheckout();

  // find the data for the current category
  const data = calibrationServicesData.find(
    (item) => item.category === category
  );

  if (!data) {
    return (
      <div className="container mt-5 text-center">
        <h4>Calibration Service not found</h4>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Header */}
      <h2 className="fw-bold">{data.title}</h2>
      <p className="text-muted mb-4">{data.breadcrumb}</p>
      {data.intro && <p>{data.intro}</p>}

      {/* Sections */}
      {data.sections.map((section, index) => (
        <div key={index} className="mt-4">
          <h4 className="fw-semibold">{section.heading}</h4>

          {/* Content paragraphs */}
          {section.content &&
            section.content.map((para, i) => (
              <p key={i} className="text-secondary">
                {para}
              </p>
            ))}

          {/* List items */}
          {section.list && (
            <ul>
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Action button */}
          {section.actionButton && (
            <button className="btn btn-outline-primary mt-2">
              {section.actionButton}
            </button>
          )}
        </div>
      ))}

      {/* Call to Action */}
      {data.callToAction && (
        <div className="mt-5 p-4 bg-light border rounded">
          <h4>{data.callToAction.title}</h4>
          <p>{data.callToAction.description}</p>
          <button className="btn btn-primary">
            {data.callToAction.buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default CalibrationPage;
