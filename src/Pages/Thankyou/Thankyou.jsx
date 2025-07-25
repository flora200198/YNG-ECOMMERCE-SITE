import React from "react";

const Thankyou = () => {
  return (
    <div className="thankyou-page">
      <h1>Thank You!</h1>
      <p>Your submission has been received.</p>
      <button className="btn btn-sm btn-light" onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}   
export default Thankyou;