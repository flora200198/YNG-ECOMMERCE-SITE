import React from "react";

const Thankyou = () => {
  return (
    <div className="thankyou-page text-center mt-5">
      <h1>Thank You!</h1>
      <p>Your order has been Placed.</p>
      <button className="btn btn-outline-primary  mb-5" onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}   
export default Thankyou;