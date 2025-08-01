// CheckoutContext.js

import { createContext, useContext, useState } from "react";

// 1. Create the context
const CheckoutContext = createContext();

// 2. Custom hook to use the context
export const useCheckout = () => useContext(CheckoutContext);

export const products = [
  // Flow Meters
  { id: 1, name: 'Electromagnetic Flow Meter', description: 'Compact/Remote/Hygenic flow meter for water, wastewater, chemicals, food, pharma with high accuracy.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 2, name: 'Coriolis Mass Flow Meter', description: 'Flow meter for liquids, slurries, solids with temperature and density display.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 3, name: 'Vortex Flow Meter', description: 'Flow meter suitable for water, chemical, air, gas, steam with high-temperature operation.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 4, name: 'Thermal Mass Flow Meter', description: 'Flow meter for biogas, steel, petroleum, paper, food with inline/insertion types.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 5, name: 'Ultrasonic Clamp-On Flow Meter', description: 'Non-intrusive clamp-on flow meter for large diameter pipes.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 6, name: 'Ultrasonic Inline Flow Meter', description: 'Inline ultrasonic flow meter with built-in data logger.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 7, name: 'Multi-Jet Meter', description: 'IP68-protected dry type multi-jet water meter with CE marking.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 8, name: 'AMR Compatible Multi-Jet Meter', description: 'Wireless communication multi-jet meter with LoRa/GPRS.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 9, name: 'Ultrasonic AMR Water Meter', description: 'Automatic reading compatible ultrasonic water meter with valve option.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },
  { id: 10, name: 'Woltman Flow Meter', description: 'Industrial flow meter for large line sizes confirming to ISO 4064.', price: 0, image: 'https://placehold.co/400x300', category: 'Flow' },

  // Pressure & Temperature
  { id: 11, name: 'Smart Pressure Transmitter', description: 'High-accuracy pressure transmitter for liquids and gases.', price: 0, image: 'https://placehold.co/400x300', category: 'Pressure' },
  { id: 12, name: 'Fixed Pressure Transmitter', description: 'Pressure measurement for liquids and gases up to 700 Bar.', price: 0, image: 'https://placehold.co/400x300', category: 'Pressure' },
  { id: 13, name: 'Differential Pressure Transmitter', description: 'Pressure measurement for flow, level, and process applications.', price: 0, image: 'https://placehold.co/400x300', category: 'Pressure' },
  { id: 14, name: 'Temperature Sensors (RTD/Thermocouple)', description: 'Temperature sensors for liquids, solids, gases with high range capability.', price: 0, image: 'https://placehold.co/400x300', category: 'Temperature' },
  { id: 15, name: 'Head Mount Temperature Transmitter', description: 'Temperature transmitter with universal input and high accuracy.', price: 0, image: 'https://placehold.co/400x300', category: 'Temperature' },
  { id: 16, name: 'DIN Rail Temperature Transmitter', description: 'DIN mount temperature transmitter supporting RTD/Thermocouple inputs.', price: 0, image: 'https://placehold.co/400x300', category: 'Temperature' },

  // Level Transmitters
  { id: 17, name: 'Ultrasonic Level Transmitter', description: 'Non-contact level transmitter for liquids and solids.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },
  { id: 18, name: 'Radar Level Transmitter', description: 'High-accuracy radar-based level transmitter for harsh environments.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },
  { id: 19, name: 'Magnetostrictive Level Transmitter', description: 'Contact level transmitter for water, chemicals, and oil.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },
  { id: 20, name: 'Guided Radar Level Transmitter', description: 'Contact radar level transmitter for liquids and solids.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },
  { id: 21, name: 'Capacitance Level Transmitter', description: 'Capacitance probe-based level measurement for liquids and solids.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },
  { id: 22, name: 'Hydrostatic Level Transmitter', description: 'Pressure-based level measurement suitable for borewells.', price: 0, image: 'https://placehold.co/400x300', category: 'Level' },

  // Liquid Analyzers
  { id: 23, name: 'pH/ORP Analyzer', description: 'Two-line display analyzer for pH and ORP measurement with high accuracy.', price: 0, image: 'https://placehold.co/400x300', category: 'Analyzer' },
  { id: 24, name: 'Turbidity Analyzer', description: 'Color-independent turbidity measurement with self-cleaning system.', price: 0, image: 'https://placehold.co/400x300', category: 'Analyzer' },
  { id: 25, name: 'Conductivity Analyzer', description: 'Liquid conductivity analyzer with panel mounting display.', price: 0, image: 'https://placehold.co/400x300', category: 'Analyzer' },
  { id: 26, name: 'Chlorine Analyzer', description: 'Continuous chlorine monitoring analyzer for water quality.', price: 0, image: 'https://placehold.co/400x300', category: 'Analyzer' },
  { id: 27, name: 'Dissolved Oxygen Analyzer', description: 'Analyzer for dissolved oxygen in water with high accuracy.', price: 0, image: 'https://placehold.co/400x300', category: 'Analyzer' },

  // Air Quality & Gas Analyzers
  { id: 28, name: 'Air Quality Monitoring Station (AQMS)', description: 'Air quality monitoring station for dust and pollutants.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' },
  { id: 29, name: 'Continuous Emission Monitoring System (CEMS)', description: 'Gas emission monitoring for various gases including SOx, NOx, CO, CO2.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' },
  { id: 30, name: 'Gas Analyzer', description: 'Analyzer for various industrial gases using NDIR, UV, Chemiluminescent methods.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' },
   
  // Water Quality Detector
  { id: 31, name: 'Air Quality Monitoring Station (AQMS)', description: 'Air quality monitoring station for dust and pollutants.', price: 0, image: 'https://placehold.co/400x300', category: 'Water' },
  // { id: 29, name: 'Continuous Emission Monitoring System (CEMS)', description: 'Gas emission monitoring for various gases including SOx, NOx, CO, CO2.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' },
  // { id: 30, name: 'Gas Analyzer', description: 'Analyzer for various industrial gases using NDIR, UV, Chemiluminescent methods.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' }
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
