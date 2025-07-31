// CheckoutContext.js

import { createContext, useContext, useState } from "react";

// 1. Create the context
const CheckoutContext = createContext();

// 2. Custom hook to use the context
export const useCheckout = () => useContext(CheckoutContext);

export  const products = [
    { id: 1, name: 'Flow Meter A', description: 'High accuracy flow meter.', price: 2999, image: 'https://placehold.co/400x300', category:'Flow' },
    { id: 2, name: 'Flow Meter B', description: 'Digital display and compact size.', price: 2499, image: 'https://placehold.co/400x300', category:'Flow' },
    { id: 3, name: 'Sensor X', description: 'Precision industrial sensor.', price: 1999, image: 'https://placehold.co/400x300', category:'Analyzer' },
  ];
// 3. Provider component
export const CheckoutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);

  

  return (
    <CheckoutContext.Provider value={{ products, cartItems, setCartItems, shippingAddress, setShippingAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};
