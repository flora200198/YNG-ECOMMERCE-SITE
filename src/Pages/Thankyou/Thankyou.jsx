import React from "react";

const Thankyou = () => {
  return (
    <div className="thankyou-page text-center">
      <h1>Thank You!</h1>
      <p>Your order has been Placed.</p>
      <button className="btn btn-outline-primary" onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}   
export default Thankyou;