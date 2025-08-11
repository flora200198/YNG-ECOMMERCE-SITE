// import React from "react";
// import { useParams } from "react-router-dom";
// import { useCheckout } from "../Context/Context";

// const SectionList = ({ items }) => {
   
//   if (!items || !items.length) return null;
//   return (
//     <ul className="list-group mb-3">
//       {items.map((item, idx) => (
//         <li key={idx} className="list-group-item border-warning">
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const BusinessDetails = ({ data }) => {
//      const { businessDetails } = useCheckout();
//   const params = useParams();
//   // Priority: explicit data prop; else find by URL slug
//   const detail =
//     data ||
//     businessDetails.find(
//       (b) => b.slug === params.slug || b.routeLink === `/${params.slug}`
//     );

//   if (!detail) {
//     return (
//       <div className="container py-5">
//         <h2 className="text-danger">Not Found</h2>
//         <p className="text-muted">The requested business could not be located.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <h2 className={`fw-bold mb-4 ${detail.themeClass || "text-warning"}`}>
//         {detail.icon && <i className={`${detail.icon} me-2`} />}
//         {detail.title}
//       </h2>

//       {/* Why Needed */}
//       {detail.whyNeeded && (
//         <>
//           <h3 className="text-dark fw-semibold mt-4">Why It’s Needed</h3>
//           <p className="text-muted">{detail.whyNeeded}</p>
//         </>
//       )}

//       {/* What It Does */}
//       {detail.whatItDoes && (
//         <>
//           <h3 className="text-dark fw-semibold mt-4">What It Does</h3>
//           <p className="text-muted">{detail.whatItDoes}</p>
//         </>
//       )}

//       {/* Process Flow */}
//       <h3 className="text-dark fw-semibold mt-4">Process Flow</h3>
//       <SectionList items={detail.processFlow} />

//       {/* Benefits for the Environment */}
//       <h3 className="text-dark fw-semibold mt-4">Benefits for the Environment</h3>
//       <SectionList items={detail.environmentBenefits} />

//       {/* Benefits for Industries */}
//       <h3 className="text-dark fw-semibold mt-4">Benefits for Industries</h3>
//       <SectionList items={detail.industryBenefits} />

//       {/* Purpose */}
//       <h3 className="text-dark fw-semibold mt-4">Purpose of Installation</h3>
//       <SectionList items={detail.purpose} />

//       {/* Industries That Need It */}
//       <h3 className="text-dark fw-semibold mt-4">Industries That Need It</h3>
//       <SectionList items={detail.industriesNeed} />

//       {/* YNG Infra Speciality */}
//       {(detail.yngSpecialityIntro || detail.yngSpecialityPoints) && (
//         <>
//           <h3 className="text-dark fw-semibold mt-4">
//             YNG Infra – Our Speciality
//           </h3>
//           {detail.yngSpecialityIntro && (
//             <p className="text-muted">{detail.yngSpecialityIntro}</p>
//           )}
//           <SectionList items={detail.yngSpecialityPoints} />
//         </>
//       )}

//       {/* Conclusion */}
//       {detail.conclusion && (
//         <p className="fw-semibold text-dark">{detail.conclusion}</p>
//       )}
//     </div>
//   );
// };

// export default BusinessDetails;

import React from "react";
import { useParams } from "react-router-dom";
import { useCheckout } from "../Context/Context";

const toSlug = (str = "") =>
  str.toLowerCase().trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const SectionList = ({ items }) => {
  if (!items || !items.length) return null;
  return (
    <ul className="list-group mb-3">
      {items.map((item, idx) => (
        <li key={idx} className="list-group-item border-warning">
          {item}
        </li>
      ))}
    </ul>
  );
};

const BusinessDetails = ({ data }) => {
  const { businessDetails } = useCheckout();
  const { slug: routeSlug } = useParams();

  // Priority: explicit data prop, otherwise find by route slug
  const detail =
    data ||
    (Array.isArray(businessDetails)
      ? businessDetails.find(
          (b) =>
            b.slug === routeSlug ||
            b.routeLink === `/business/${routeSlug}` ||
            toSlug(b.title) === routeSlug
        )
      : null);

  if (!detail) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">Not Found</h2>
        <p className="text-muted">The requested business could not be located.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className={`fw-bold mb-4 ${detail.themeClass || "text-warning"}`}>
        {detail.icon && <i className={`${detail.icon} me-2`} />}
        {detail.title}
      </h2>

      {detail.whyNeeded && (
        <>
          <h3 className="text-dark fw-semibold mt-4">Why It’s Needed</h3>
          <p className="text-muted">{detail.whyNeeded}</p>
        </>
      )}

      {detail.whatItDoes && (
        <>
          <h3 className="text-dark fw-semibold mt-4">What It Does</h3>
          <p className="text-muted">{detail.whatItDoes}</p>
        </>
      )}

      <h3 className="text-dark fw-semibold mt-4">Process Flow</h3>
      <SectionList items={detail.processFlow} />

      <h3 className="text-dark fw-semibold mt-4">Benefits for the Environment</h3>
      <SectionList items={detail.environmentBenefits} />

      <h3 className="text-dark fw-semibold mt-4">Benefits for Industries</h3>
      <SectionList items={detail.industryBenefits} />

      <h3 className="text-dark fw-semibold mt-4">Purpose of Installation</h3>
      <SectionList items={detail.purpose} />

      <h3 className="text-dark fw-semibold mt-4">Industries That Need It</h3>
      <SectionList items={detail.industriesNeed} />

      {(detail.yngSpecialityIntro || detail.yngSpecialityPoints) && (
        <>
          <h3 className="text-dark fw-semibold mt-4">YNG Infra – Our Speciality</h3>
          {detail.yngSpecialityIntro && (
            <p className="text-muted">{detail.yngSpecialityIntro}</p>
          )}
          <SectionList items={detail.yngSpecialityPoints} />
        </>
      )}

      {detail.conclusion && (
        <p className="fw-semibold text-dark">{detail.conclusion}</p>
      )}
    </div>
  );
};

export default BusinessDetails;

