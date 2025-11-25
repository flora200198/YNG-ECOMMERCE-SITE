import { createContext, useContext, useState } from "react";


// 1. Create the context
const CheckoutContext = createContext();

// 2. Custom hook to use the context
export const useCheckout = () => useContext(CheckoutContext);

export const businesses = [
  {
    title: "STP (Sewage Treatment Plant)",
    description: "Design and installation of modern sewage treatment plants for residential, commercial, and industrial needs.",
    image: "/assets/STP.png"
  },
  {
    title: "ETP (Effluent Treatment Plant)",
    description: "Comprehensive solutions for treating industrial wastewater and effluents.",
    image: "/assets/ETP.png"
  },
  {
    title: "WTP (Water Treatment Plant)",
    description: "Advanced water treatment systems for clean and potable water supply.",
    image: "/assets/WTP.png"
  },
  {
    title: "Automation for Schools",
    description: "Smart automation systems to digitize attendance, security, and communication in educational institutions.",
    image: "/assets/school-automation.png"
  },
  {
    title: "Smart Home Solutions",
    description: "Home automation services for lighting, climate, security, and more using IoT technology.",
    image: "/assets/smart-home.png"
  },
  {
    title: "Consultancy Services",
    description: "Expert consulting in environmental compliance, engineering, and project execution.",
    image: "/assets/consultancy.png"
  },
  {
    title: "Preconstructed Modular Houses",
    description: "Fast and sustainable prefab housing options tailored for modern living.",
    image: "/assets/pre-structured-house.png"
  },
  {
    title: "Turnkey Installation Services",
    description: "End-to-end project installation and commissioning across sectors.",
    image: "/assets/turnkey.png"
  },
 {
    title: "Environmental Solutions",
    description: "Innovative solutions for environmental monitoring and compliance.",
    image: "/assets/instruments.png"
  },
  {
    title: "Calibration Services",
    description: "Innovative solutions for environmental monitoring and compliance.",
    image: "/assets/CalibrationServices.png"
  }
];

export const products = [
  // Flow Meters
  { id: 1, name: 'Electromagnetic Flow Meter', description: 'Compact / Hygenic flow meter for water, wastewater, chemicals, food, pharma with high accuracy.', price: 0, image: './assets/flow-meter.png', category: 'Flow' },
  // { id: 1, name: 'Electromagnetic Flow Meter', description: 'Remote / Hygenic flow meter for water, wastewater, chemicals, food, pharma with high accuracy.', price: 0, image: './assets/flow-meter.png', category: 'Flow' },
  { id: 2, name: 'Coriolis Mass Flow Meter', description: 'Flow meter for liquids, slurries, solids with temperature and density display.', price: 0, image: './assets/coriolis.png', category: 'Flow' },
  { id: 3, name: 'Vortex Flow Meter', description: 'Flow meter suitable for water, chemical, air, gas, steam with high-temperature operation.', price: 0, image: './assets/Vortex.png', category: 'Flow' },
  { id: 4, name: 'Thermal Mass Flow Meter', description: 'Flow meter for biogas, steel, petroleum, paper, food with inline/insertion types.', price: 0, image: './assets/Thermal-mass.png', category: 'Flow' },
  { id: 5, name: 'Ultrasonic Clamp-On Flow Meter', description: 'Non-intrusive clamp-on flow meter for large diameter pipes.', price: 0, image: './assets/Ultrasonic.png', category: 'Flow' },
  { id: 6, name: 'Ultrasonic Inline Flow Meter', description: 'Inline ultrasonic flow meter with built-in data logger.', price: 0, image: './assets/Ultrasonic-In.png', category: 'Flow' },
  { id: 7, name: 'Multi-Jet Meter', description: 'IP68-protected dry type multi-jet water meter with CE marking.', price: 0, image: './assets/Multijet.png', category: 'Flow' },
  { id: 8, name: 'AMR Compatible Multi-Jet Meter', description: 'Wireless communication multi-jet meter with LoRa/GPRS.', price: 0, image: './assets/AMR-Multijet.png', category: 'Flow' },
  { id: 9, name: 'Ultrasonic AMR Water Meter', description: 'Automatic reading compatible ultrasonic water meter with valve option.', price: 0, image: './assets/AMR-Ultrasonic.png', category: 'Flow' },
  { id: 10, name: 'Woltman Flow Meter', description: 'Industrial flow meter for large line sizes confirming to ISO 4064.', price: 0, image: './assets/Woltman.png', category: 'Flow' },

  // Pressure 
  { id: 11, name: 'Smart Pressure Transmitter', description: 'High-accuracy pressure transmitter for liquids and gases.', price: 0, image: './assets/Smart-Pressure.png', category: 'Pressure' },
  { id: 12, name: 'Fixed Pressure Transmitter', description: 'Pressure measurement for liquids and gases up to 700 Bar.', price: 0, image: './assets/Fixed-Pressure.png', category: 'Pressure' },
  { id: 13, name: 'Differential Pressure Transmitter', description: 'Pressure measurement for flow, level, and process applications.', price: 0, image: './assets/DPT.png', category: 'Pressure' },

  //Temperture Sensors details not added 
  { id: 14, name: 'Temperature Sensors (RTD/Thermocouple)', description: 'Temperature sensors for liquids, solids, gases with high range capability.', price: 0, image: './assets/Temperature-sensor.png', category: 'Temperature' },
  { id: 15, name: 'Head Mount Temperature Transmitter', description: 'Temperature transmitter with universal input and high accuracy.', price: 0, image: './assets/Head-mount.png', category: 'Temperature' },
  { id: 16, name: 'DIN Rail Temperature Transmitter', description: 'DIN mount temperature transmitter supporting RTD/Thermocouple inputs.', price: 0, image: './assets/DIN.png', category: 'Temperature' },

  // Level Transmitters
  { id: 17, name: 'Ultrasonic Level Transmitter', description: 'Non-contact level transmitter for liquids and solids.', price: 0, image: './assets/Ultrasonic-level.png', category: 'Level' },
  { id: 18, name: 'Radar Level Transmitter', description: 'High-accuracy radar-based level transmitter for harsh environments.', price: 0, image: './assets/Radar-level.png', category: 'Level' },
  { id: 19, name: 'Magnetostrictive Level Transmitter', description: 'Contact level transmitter for water, chemicals, and oil.', price: 0, image: './assets/Magneto.png', category: 'Level' },
  { id: 20, name: 'Guided Radar Level Transmitter', description: 'Contact radar level transmitter for liquids and solids.', price: 0, image: './assets/Guided-radar.png', category: 'Level' },
  { id: 21, name: 'Capacitance Level Transmitter', description: 'Capacitance probe-based level measurement for liquids and solids.', price: 0, image: './assets/capacitance.png', category: 'Level' },
  { id: 22, name: 'Hydrostatic Level Transmitter', description: 'Pressure-based level measurement suitable for borewells.', price: 0, image: './assets/Hydrostatic-level.png', category: 'Level' },

  // Liquid Analyzers
  { id: 23, name: 'pH/ORP Analyzer', description: 'Two-line display analyzer for pH and ORP measurement with high accuracy.', price: 0, image: './assets/PH.png', category: 'Analyzer' },
  { id: 24, name: 'Turbidity Analyzer', description: 'Color-independent turbidity measurement with self-cleaning system.', price: 0, image: './assets/Turbidity.png', category: 'Analyzer' },
  { id: 25, name: 'Conductivity Analyzer', description: 'Liquid conductivity analyzer with panel mounting display.', price: 0, image: './assets/conductivity.png', category: 'Analyzer' },
  { id: 26, name: 'Chlorine Analyzer', description: 'Continuous chlorine monitoring analyzer for water quality.', price: 0, image: './assets/chlorine.png', category: 'Analyzer' },
  { id: 27, name: 'Dissolved Oxygen Analyzer', description: 'Analyzer for dissolved oxygen in water with high accuracy.', price: 0, image: './assets/DO.png', category: 'Analyzer' },

  // Air Quality & Gas Analyzers
  { id: 28, name: 'Air Quality Monitoring Station (AQMS)', description: 'Air quality monitoring station for dust and pollutants.', price: 0, image: './assets/AQMS.png', category: 'Air Quality' },
  { id: 29, name: 'Continuous Emission Monitoring System (CEMS)', description: 'Gas emission monitoring for various gases including SOx, NOx, CO, CO2.', price: 0, image: './assets/continuous-emission.png', category: 'Air Quality' },
  { id: 30, name: 'Gas Analyzer', description: 'Analyzer for various industrial gases using NDIR, UV, Chemiluminescent methods.', price: 0, image: './assets/Gas-analyzer.png', category: 'Air Quality' },
   
  // Water Quality Detector
  { id: 31, name: 'Water Quality Monitoring System', description: 'Water quality monitoring station for dust and pollutants.', price: 0, image: './assets/Water-quality.png', category: 'Water' },
  // { id: 29, name: 'Continuous Emission Monitoring System (CEMS)', description: 'Gas emission monitoring for various gases including SOx, NOx, CO, CO2.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' },
  // { id: 30, name: 'Gas Analyzer', description: 'Analyzer for various industrial gases using NDIR, UV, Chemiluminescent methods.', price: 0, image: 'https://placehold.co/400x300', category: 'Air Quality' }
];

export const ProductDetails = [
  {
  "fluid_type": "Pure water, sewage water, electronic manufacturing fluids, chemical solutions, industrial medicine, food industry fluids, mud and slurry (conductive liquids)",
  "measurement": "Volumetric flow measurement for conductive liquids",
  "product_name": "RLM Electromagnetic Flow Meter (Compact Type)",
  "accuracy": "±0.5% for range 0.1 m/s to 10 m/s",
  "diameter": "DN 6 mm to DN 3000 mm",
  "line_size": "DN 6 mm to DN 3000 mm",
  "measurable_conductivity": ">0.5 µS/cm",
  "electrode_type": "SS316L (Optional: Titanium, Hastelloy C, Hastelloy B, Tantalum, Tungsten Carbide)",
  "wiring": "Power cable: 2-core (≥0.75 mm²), Signal cable: 2-core shielded (≥0.75 mm²)",
  "communication_protocol": "RS485 (MODBUS RTU), HART (optional)",
  "diagnostic_function": "Self-diagnosis: Excitation loop detection, zero trim, empty pipe detection, flow signal verification",
  "output": "4-20mA, pulse, frequency",
  "input": "AC 85–260V or DC 24V",
  "process_temperature": "0°C to 70°C (max up to 180°C depending on lining material)",
  "operating_temperature": "Ambient: 5°C to 55°C",
  "material_type": "Body: Carbon steel with lining (PTFE, FEP, Neoprene)",
  "degree_of_protection": "IP65, IP67, IP68",
  "power_supply": "AC 85–260V or DC 24V",
  "housing": "Compact or separate converter housing",
  "weight": "NA",
  "display": "8-digit LCD display with instantaneous/total flow, velocity, self-calibration, alarms",
  "case_material": "Carbon steel body with protective coating",
  "mounting": "Horizontal or vertical (full pipe conditions required, straight pipe ≥5DN upstream, ≥2DN downstream, grounding required)",
  "operation": "Faraday's law of electromagnetic induction. Installation includes stable conductivity requirements, grounding, avoidance of strong EM fields, proper straight pipe lengths (≥5DN upstream, ≥2DN downstream), and correct electrode leveling. Vertical installation recommended for solids/slurry. Calibration includes zero, span, 4-20mA, empty/full pipe tests. Communication setup via RS485 MODBUS or optional HART. Explosion-proof version available (EX[ia]ia IICT5). Includes extensive troubleshooting, self-diagnostics, and maintenance for electrode cleaning and noise reduction."
  },
  {
    "fluid_type": "Pure water, sewage water, electronic manufacturing fluids, chemical solutions, industrial medicine, food industry fluids, mud and slurry (conductive liquids)",
    "measurement": "Volumetric flow measurement for conductive liquids",
    "product_name": "RLM Electromagnetic Flow Meter (Remote Type)",
    "accuracy": "±0.5% for range 0.1 m/s to 10 m/s",
    "diameter": "DN 6 mm to DN 3000 mm",
    "line_size": "DN 6 mm to DN 3000 mm",
    "measurable_conductivity": ">0.5 µS/cm",
    "electrode_type": "SS316L (Optional: Titanium, Hastelloy C, Hastelloy B, Tantalum, Tungsten Carbide)",
    "wiring": "Power: 2-core cable (≥0.75mm²), Signal: 2-core shielded cable (≥0.75mm²), Coil & Electrode connections",
    "communication_protocol": "RS485 (MODBUS RTU/ASCII), HART (optional)",
    "diagnostic_function": "Self-diagnostic features with electrode grounding check, empty pipe detection, error logs, and flow signal verification",
    "output": "4-20mA, pulse/frequency output, relay alarms, RS485 communication",
    "input": "AC 85–260V or DC 24V",
    "process_temperature": "0°C to 70°C (max 180°C based on lining material)",
    "operating_temperature": "Ambient: 5°C to 55°C; Storage: 0°C to 80°C",
    "material_type": "Body: Carbon steel with lining (PTFE, FEP, Neoprene)",
    "degree_of_protection": "IP65, IP67, IP68",
    "power_supply": "AC 85–260V or DC 24V",
    "housing": "Wall-mounted or panel-mounted remote converter housing",
    "weight": "NA",
    "display": "128x64 Graphical LCD with instantaneous/total flow, alarms, and parameter configuration",
    "case_material": "Carbon steel body; electronics housing (coated for protection)",
    "mounting": "Horizontal or vertical (with full pipe conditions, grounding recommended, proper straight pipe length before and after meter)",
    "operation": "Faraday's law principle for conductive fluids. Installation requires stable conductivity, electrode grounding, avoidance of strong EM interference, straight pipe lengths (≥5DN upstream, ≥2DN downstream), vertical mounting for solids and slurry, and proper lining selection (Ne, FEP, PTFE) based on temperature/chemical compatibility. Includes menu-driven calibration (zero, span, 4-20mA), RS485/HART setup, alarm configuration, and troubleshooting for empty pipe or electrode fouling."
  },
  {
    "fluid_type": "Steam, gases, liquids including DM water, chemicals, pharma fluids, and air",
    "measurement": "Volumetric flow, temperature (mass flow can be derived via density calculation)",
    "product_name": "RLV Vortex Flow Meter (Techvort RLV)",
    "accuracy": "±1% with Repeatability ±0.25%",
    "diameter": "DN 10 mm to DN 500 mm (Flange and Wafer type)",
    "line_size": "DN 10 mm to DN 500 mm",
    "measurable_conductivity": "NA (works regardless of conductivity)",
    "electrode_type": "NA (uses vortex shedding principle, no electrodes)",
    "wiring": "3-wire system (12-24VDC/30mA), 2-wire system (12-24VDC/4-20mA); RS485+, RS485-, pulse output, PT100 connections",
    "communication_protocol": "RS485, HART (4-20mA), Pulse output, RS232 (optional)",
    "diagnostic_function": "NA (no specific diagnostic function mentioned)",
    "output": "4-20mA analog output, pulse output, RS485 communication, RS232 (optional)",
    "input": "External 24VDC (12-24VDC/30mA) or Lithium battery (3.6V)",
    "process_temperature": "-50°C to +450°C",
    "operating_temperature": "Ambient: -30°C to +70°C; LCD: -20°C to +60°C",
    "material_type": "Measuring tube: SS316L; Sensor: SS A351, CF3M",
    "degree_of_protection": "IP67/NEMA 4X (Optional IP68)",
    "power_supply": "24VDC (external) or battery powered (3.6V)",
    "housing": "Compact or remote transmitter housing",
    "weight": "NA",
    "display": "LCD display with main, secondary, density, temperature, and ON/OFF time displays",
    "case_material": "Stainless steel (SS316L)",
    "mounting": "Vertical (upward/downward for gas or steam, upward for liquids) or horizontal installation; wafer and flange styles supported",
    "operation": "Based on Karman vortex principle. Includes proper vertical/horizontal installation, conduit installation precautions, vibration resistance (1g at 500Hz), process connection (flange or wafer), steam/gas measuring guidelines, RS485 network configuration, and menu-driven parameter setting (flow units, density, 4-20mA calibration). Suitable for industrial environments, high vibration resistance, no moving parts, zero-point drift-free."
  },
  {
    "fluid_type": "Non-Newtonian fluids, multi-phase fluids, viscous fluids, syrups, compressed natural gas, food products, petroleum, chemicals, pharmaceuticals, polymers",
    "measurement": "Mass flow, density, temperature, volumetric flow",
    "product_name": "RLCM Coriolis Mass Flow Meter (Techmass RLCM-400 Series)",
    "accuracy": "±0.2% ±[(zero stability/flow) × 100%]; Density accuracy: ±1%; Repeatability: ±0.1%",
    "diameter": "DN 15 mm to DN 125 mm",
    "line_size": "DN 15 mm to DN 125 mm",
    "measurable_conductivity": "NA (works irrespective of conductivity)",
    "electrode_type": "NA (Coriolis principle, no electrodes)",
    "wiring": "9-core shielded cable between sensor and transmitter (max length 200m)",
    "communication_protocol": "RS485 (MODBUS), HART",
    "diagnostic_function": "Zero calibration, sensor vibration monitoring, density calibration, empty/full tube detection",
    "output": "4-20mA, pulse/frequency output, RS485, HART",
    "input": "AC 220V ±20% or DC 18–36V",
    "process_temperature": "-60°C to +180°C",
    "operating_temperature": "-20°C to +55°C (ambient), storage: -20°C to +55°C",
    "material_type": "Sensor tube: 1Cr18Ni9Ti or 316L Stainless Steel",
    "degree_of_protection": "IP65",
    "power_supply": "AC 220V ±20% or DC 18–36V",
    "housing": "Compact or remote transmitter housing",
    "weight": "DN15: 10 kg to DN125: 60 kg",
    "display": "LCD display showing instantaneous flow, total flow, density, temperature",
    "case_material": "Stainless steel (sensor), protected transmitter housing",
    "mounting": "Vertical or horizontal; lowest point for liquids, topmost point for gases; vibration isolation recommended",
    "operation": "Includes sensor installation guidelines (lowest point for liquids, topmost for gases), vibration isolation requirements, standard, anti-vibration, pipeline flushing, and side installation configurations. Electrical connection via shielded cable, RS485 communication setup, menu-driven parameter configuration, calibration (zero, density, frequency, current outputs), flameproof usage compliance (Exd[ib]ibIIBT5), and regular maintenance with periodic accuracy checks. Suitable for harsh industrial environments with ambient temperature -20°C to +55°C and humidity ≤95%."
  },
  {
  "fluid_type": "All kinds of gases (excluding acetylene)",
  "measurement": "Gas mass flow measurement, standard volumetric flow",
  "product_name": "RLTM Thermal Mass Flow Meter",
  "accuracy": "±1%",
  "diameter": "DN 25 mm to DN 4000 mm",
  "line_size": "DN 25 mm to DN 4000 mm",
  "measurable_conductivity": "NA (thermal mass flow meters do not require conductivity)",
  "electrode_type": "NA (uses thermal principle, no electrodes)",
  "wiring": "AC: L/N terminals; DC: +24V/0V; RS-485 A/B; 4-20mA I+/I-; Pulse P+/P-; Alarm relay terminals",
  "communication_protocol": "RS-485 (photoelectric isolation), HART protocol",
  "diagnostic_function": "Self-check: power supply, memorizer, sensor, AD converter, clock, parameter validation",
  "output": "4-20mA (photoelectric isolation, max 500Ω), RS-485, pulse output, alarm relay outputs",
  "input": "AC 220V (≤18-19 W) or DC 24V (500 mA)",
  "process_temperature": "Sensor: -10°C to +200°C (standard), High-temperature version: -10°C to +350°C",
  "operating_temperature": "Converter: -10°C to +45°C ambient",
  "material_type": "Pipeline: Carbon Steel, Stainless Steel, Plastic",
  "degree_of_protection": "IP67",
  "power_supply": "AC 220V or DC 24V",
  "housing": "All-in-one or split-type converter housing",
  "weight": "NA",
  "display": "Four-line LCD showing gas mass flow, standard volumetric flow, accumulated flow, running time, medium temperature",
  "case_material": "Converter: Stainless steel/Carbon steel",
  "mounting": "Horizontal installation (straight sections ≥5D upstream, ≥3D downstream); vertical allowed; flange or insertion type",
  "operation": "Measures gas mass flow based on constant temperature difference principle. Installation includes straight pipeline sections, optional sky shade for outdoor use, avoidance of corrosive environments. Provides online insertion, ball valve installation, alignment with flow direction, and flange connections for full-tube models. Digital settings include diameter input, flow range, density, alarm limits, and RS-485/HART setup. Supports multi-segment calibration (voltage-flow), zero calibration, resistance calibration, current output calibration, and temperature compensation. Fault diagnostics cover power, sensor dirt, pulsating flow, and communication errors."
  },
  {
  "fluid_type": "Water and other liquids (including petrochemical, metallurgy, power plant water, irrigation, city water, energy monitoring applications)",
  "measurement": "Flow velocity, volumetric flow, heat quantity (for water-based heat metering)",
  "product_name": "RLU Ultrasonic Inline Flow Meter (RLU-100 Series)",
  "accuracy": "±0.5%, ±1% (user selectable)",
  "diameter": "DN 15 mm to DN 1000 mm",
  "line_size": "DN 15 mm to DN 1000 mm",
  "measurable_conductivity": "NA (ultrasonic principle does not require conductivity)",
  "electrode_type": "NA (ultrasonic principle, no electrodes)",
  "wiring": "AC/DC power wiring, RS232, RS485 (non-isolated), optional TTL output; PT1000 temperature sensor inputs",
  "communication_protocol": "RS232, RS485 (MODBUS RTU/ASCII), M-Bus, GPRS, CDMA (optional)",
  "diagnostic_function": "Self-diagnostic: signal strength (SS), signal quality (Q), error codes (low signal, empty pipe, hardware, overflow, etc.)",
  "output": "RS232, RS485, 4-20mA, OCT pulse, relay outputs, alarm outputs, frequency output",
  "input": "AC power, DC battery (3.6V lithium), external 5V/24V for RS485/4-20mA operation, PT1000 temperature inputs",
  "process_temperature": "-40°C to 160°C (with ceramic sensor)",
  "operating_temperature": "Ambient: -25°C to +60°C (LCD), -40°C to +80°C (unit)",
  "material_type": "Pipe materials supported: Carbon steel, stainless steel, copper, PVC, cast iron, aluminum, FRP, others",
  "degree_of_protection": "IP68 (submersible up to 2 meters)",
  "power_supply": "Battery (3.6V, life 6–10 years), AC, or DC (24V)",
  "housing": "Sealed IP68-rated enclosure (integrated or remote display options)",
  "weight": "NA",
  "display": "96-segment LCD showing 44 windows: flow rate, totalizers, velocity, heat quantity, diagnostics",
  "case_material": "Stainless steel or coated housing for outdoor use",
  "mounting": "Inline flanged, hygienic clamp type, or insertion; supports any orientation (horizontal/vertical)",
  "operation": "Works on ultrasonic time-difference principle. Menu-driven setup supports pipe diameter, wall thickness, material, liner type, fluid type, transducer type, and installation method (V, Z, N, W). Includes signal strength/quality diagnostics, empty pipe detection, automatic memory for daily/monthly/yearly totals, power ON/OFF logs, RS485/MODBUS setup, frequency/current output calibration, and multipoint rectification. No moving parts, zero pressure loss, high rangeability. Supports heat measurement (via PT1000). Fault diagnosis includes signal errors, hardware issues, overflow, and empty pipe detection."
  },
  {
  "fluid_type": "Virtually all liquids including ultra-pure liquids, potable water, chemicals, raw sewage, reclaimed water, cooling water, river water, plant effluent",
  "measurement": "Flow velocity, volumetric flow, totalizers (net, positive, negative)",
  "product_name": "RLC Ultrasonic Clamp-On Handheld Flow Meter",
  "accuracy": "±1% of reading (>0.2 m/s)",
  "diameter": "DN 20 mm to DN 6000 mm",
  "line_size": "DN 20 mm to DN 6000 mm",
  "measurable_conductivity": "NA (ultrasonic principle does not require conductivity)",
  "electrode_type": "NA (ultrasonic principle, no electrodes)",
  "wiring": "RS-232 communication port, OCT output (shared pin), power input terminals, rechargeable battery terminals",
  "communication_protocol": "RS-232 (baud rate 75–115200, compatible with FUJI protocol), ASCII-based commands",
  "diagnostic_function": "Built-in power-on self-diagnosis, error codes (signal detection, hardware issues, empty pipe), signal strength and quality monitoring",
  "output": "RS-232, frequency output (0–9999 Hz configurable), OCT output, buzzer alarms, pulse outputs",
  "input": "Built-in rechargeable Ni-H battery (3 AAA) or AC 100-240V charger input",
  "process_temperature": "Standard transducers: 0°C to 110°C (optional higher range transducers available)",
  "operating_temperature": "Ambient: standard industrial conditions (LCD contrast adjustable for environment)",
  "material_type": "Housing: ABS (handset); Transducers: ABS or special material for high-temperature use",
  "degree_of_protection": "IP65 (transducers); handheld electronics: portable enclosed design",
  "power_supply": "Rechargeable Ni-H battery (10+ hours operation), AC charger (100-240V)",
  "housing": "Handheld portable ABS housing with keypad and LCD",
  "weight": "514 g (with batteries)",
  "display": "4×16 character LCD display (English), menus M00–M99 for configuration and diagnostics",
  "case_material": "ABS (instrument); transducers ABS or high-temp compatible material",
  "mounting": "Clamp-on with V, Z, W, N methods depending on pipe size and material",
  "operation": "Non-invasive clamp-on design using ultrasonic transit-time principle. Supports pipe materials (CS, SS, PVC, Copper, Aluminum, Cast Iron) with liners (Rubber, Teflon, etc.). Includes menu-driven configuration (pipe OD, thickness, material, liner, fluid type, transducer type, spacing). Provides signal strength/quality monitoring (Q value, transit time ratio), error codes (I, H, J, K, F, etc.), and alarms (buzzer, OCT). Data logger (2000+ lines), RS-232 remote control and ASCII command support. Zero calibration, damping adjustment, password protection, totalizer reset, output pulse/frequency scaling, and event alarms (flow range, reverse flow, signal loss)."
  },
  {
  "fluid_type": "Water (domestic and industrial applications)",
  "measurement": "Volumetric flow measurement of water",
  "product_name": "RLMJ Multijet Water Meter (B Class & C Class)",
  "accuracy": "Class B & Class C (ISO 4064-3:2014 compliant)",
  "diameter": "DN 15 mm, DN 20 mm, DN 25 mm, DN 32 mm",
  "line_size": "15 mm, 20 mm, 25 mm, 32 mm",
  "measurable_conductivity": "NA (mechanical type water meter, conductivity not applicable)",
  "electrode_type": "NA (mechanical turbine and piston-based operation)",
  "wiring": "NA (mechanical meter without electrical wiring requirement)",
  "communication_protocol": "NA (manual optical reading available)",
  "diagnostic_function": "NA",
  "output": "NA",
  "input": "NA",
  "process_temperature": "Maximum 50°C",
  "operating_temperature": "Ambient conditions suitable for domestic and industrial water supply",
  "material_type": "Corrosion-resistant brass body (internally and externally powder-coated)",
  "degree_of_protection": "Moisture-protected register (counter)",
  "power_supply": "NA (mechanical meter, no power required)",
  "housing": "Electrostatic painted corrosion-resistant brass",
  "weight": "15 mm: 1.34 kg, 20 mm: 1.10 kg, 25 mm: 2.20 kg, 32 mm: 4.37 kg",
  "display": "Mechanical register (moisture-protected, magnetic coupling with counter)",
  "case_material": "Brass body with electrostatic paint",
  "mounting": "Inline horizontal installation with built-in strainer and optional non-return valve",
  "operation": "Operates on multi-jet principle: water enters through multiple ducts creating balanced jets impacting the turbine, ensuring smooth rotation and stable accuracy. Magnetic coupling drives the register without direct contact. C Class volumetric type uses piston movement in a chamber, with each rotation corresponding to a fixed volume. Features low head loss, high sensitivity at low flows, built-in strainer, optional non-return valve, optical reading option, and long service life with minimal maintenance."
  },
  {
  "fluid_type": "Water (cold and hot water applications for domestic and industrial use)",
  "measurement": "Volumetric flow measurement of water with automatic remote meter reading",
  "product_name": "AMR Compatible Multijet Meter",
  "accuracy": "Class B (ISO-compliant)",
  "diameter": "DN 15 mm, DN 20 mm, DN 25 mm",
  "line_size": "15 mm, 20 mm, 25 mm",
  "measurable_conductivity": "NA (mechanical meter, no conductivity requirement)",
  "electrode_type": "NA (mechanical turbine meter with photoelectric reading sensor)",
  "wiring": "LoRa RF module (wireless), M-Bus wired option available for collectors",
  "communication_protocol": "LoRa RF wireless (470–510 MHz), M-Bus (CJ/T 188-2004), GPRS (via concentrator)",
  "diagnostic_function": "Built-in anti-magnetic attack detection, reed switch failure detection, low power detection, automatic valve control alarms",
  "output": "Wireless LoRa transmission to collector/concentrator, M-Bus data output",
  "input": "Lithium battery (for water meter) with 6-year life, easy replacement",
  "process_temperature": "Cold water: 0.1°C to 40°C; Hot water: 0.1°C to 100°C",
  "operating_temperature": "RF module: -20°C to +70°C; Collector/Concentrator: -25°C to +65°C",
  "material_type": "Brass body (corrosion-resistant)",
  "degree_of_protection": "Moisture-resistant meter register, anti-magnetic protection",
  "power_supply": "Lithium battery (meter), AC 220V ±20% (collector/concentrator)",
  "housing": "Brass meter housing with optical sensor; ABS/industrial enclosures for RF module, collectors, and concentrator",
  "weight": "NA",
  "display": "Photoelectric direct reading register with 0.0001 m³ minimum reading and 9999.9999 m³ max reading",
  "case_material": "Brass (meter), ABS/electronic housing for RF and concentrator",
  "mounting": "Inline horizontal installation; M-Bus wiring or wireless RF networking with collectors and concentrators",
  "operation": "Water meter operates on a multijet principle with photoelectric direct reading sensor. Integrated LoRa-based wireless module transmits data up to 2–5 km in open areas. Supports remote-controlled valve operation (prepaid/postpaid), low power auto shut-off, and anti-magnetic attack protection. Reed switch failure detection triggers alarms. Networking includes collectors (RF or M-Bus) connected to concentrators using wireless mesh networking with up to 128 meters per collector. Data stored in non-volatile memory with 10-year retention. Centralized GPRS-enabled concentrator enables cloud-based remote monitoring and billing."
  },
  {
  "fluid_type": "Water (industrial applications)",
  "measurement": "Volumetric flow measurement of water",
  "product_name": "RLW Woltman Flow Meter",
  "accuracy": "ISO 4064 Class B standard",
  "diameter": "DN 50 mm to DN 200 mm (sizes available: 50, 65, 80, 100, 125, 150, 200 mm)",
  "line_size": "DN 50 mm to DN 200 mm",
  "measurable_conductivity": "NA (mechanical water meter, conductivity not required)",
  "electrode_type": "NA (mechanical turbine meter)",
  "wiring": "NA (mechanical meter, no wiring required)",
  "communication_protocol": "Optical reading (optional)",
  "diagnostic_function": "NA",
  "output": "NA",
  "input": "NA",
  "process_temperature": "Maximum 50°C",
  "operating_temperature": "Ambient conditions suitable for industrial environments",
  "material_type": "Cast iron or ductile iron body with epoxy paint coating",
  "degree_of_protection": "IP68 (protected dry-type mechanism)",
  "power_supply": "NA (mechanical meter, no power required)",
  "housing": "Cast iron or ductile iron body with epoxy coating",
  "weight": "NA",
  "display": "Mechanical register with optical reading option, resolution 0.001 m³ or 0.01 m³ depending on size",
  "case_material": "Cast iron or ductile iron with epoxy coating",
  "mounting": "Inline horizontal installation for industrial pipelines",
  "operation": "Operates on Woltman turbine principle: water flow drives a turbine connected to a mechanical register. Features IP68 dry-type mechanism, low head loss, high sensitivity at low flow rates, optical reading capability, interchangeable parts, impact-resistant glass, and minimal maintenance requirements. Suitable for industrial water metering under ISO 4064 Class B compliance."
  },
  {
  "fluid_type": "Fluids, gases, steam (including corrosive and high-temperature agents when used with isolation flange)",
  "measurement": "Pressure, differential pressure, fluid level, flow (when used with throttling devices)",
  "product_name": "3351PT Smart Pressure Transmitter",
  "accuracy": "High precision (factory calibrated with options for zero stability and temperature compensation)",
  "diameter": "NA (depends on process connection such as M20×1.5 or NPT 1/2)",
  "line_size": "NA",
  "measurable_conductivity": "NA (pressure-based measurement does not depend on conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire loop powered, M20×1.5 or NPT1/2 electrical conduit; explosion-proof impulse terminal; test terminals provided",
  "communication_protocol": "HART (optional)",
  "diagnostic_function": "Built-in diagnostics including over-pressure, signal circuit fault detection, sensor module check, error codes, and maintenance alerts",
  "output": "4-20 mA DC (2-wire), square root or linear output",
  "input": "Loop powered via signal line; intrinsic safety barriers supported (Ui: 28VDC, Li: 30mA, Pi: 0.84W)",
  "process_temperature": "High-temperature applications supported with flange isolation (steam, hot fluids)",
  "operating_temperature": "Ambient: typical industrial ranges, avoid direct sunlight or extreme temperature gradients",
  "material_type": "Sensor: Capacitance type; Body: industrial-grade alloy (stainless steel for wetted parts)",
  "degree_of_protection": "Explosion-proof intrinsically safe type; sealed electrical housing (IP standard implied)",
  "power_supply": "Loop-powered 24VDC (signal line)",
  "housing": "Compact transmitter with integral or flange-mounted remote sensor options",
  "weight": "Approx. 0.75 kg (varies with configuration)",
  "display": "Digital LCD meter head displaying pressure, temperature, current, % of range, and analog bar graph",
  "case_material": "Metal enclosure (industrial-grade alloy)",
  "mounting": "Direct-mounted using threaded connections (M20×1.5, NPT1/2) or flange; options for bracket, local, or immersion mounting",
  "operation": "Utilizes capacitance sensing with digital signal processing and 16-bit microprocessor for high-speed computation and stability. Zero stability (ZSC) and temperature compensation (TSC) enhance accuracy. Supports measurement of pressure, DP, level, and flow (with orifice plates). Mount in dry, ventilated areas avoiding vibration and strong sunlight. Supports wet/dry impulse piping, cooling devices for steam, gas taps at top, fluid taps at side/bottom. Electrical wiring includes shield separation from power lines. Built-in menu allows zero/range setting, damping adjustment, HART communication, and diagnostics. Maintenance includes sensor diaphragm cleaning, wiring inspection, diode/test terminal checks, and software resets. Explosion-proof intrinsic safety compliant with GB3836."
  },
  {
  "fluid_type": "Applicable for refrigeration, fuel cells, pumps, hydraulics, spraying systems, pneumatics, compressors, process control, flow systems, robotics, agriculture, hydrogen storage",
  "measurement": "Pressure measurement (gauge or absolute)",
  "product_name": "RST2001 Fixed Pressure Transmitter",
  "accuracy": "±1% FS or ±0.5% FS (from -40°C to 105°C)",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (pressure-based measurement does not depend on conductivity)",
  "electrode_type": "NA",
  "wiring": "IP68 Cable Gland or DIN 43650A electrical connection",
  "communication_protocol": "NA (analog signal output only)",
  "diagnostic_function": "NA",
  "output": "0.5-4.5V, 1-5V, 0-10V, 0.5-10.5V, or 4-20mA",
  "input": "5V DC or 8-30V DC (depending on model configuration)",
  "process_temperature": "-40°C to 105°C (optional high-temp range available)",
  "operating_temperature": "-20°C to 80°C (standard), -40°C to 105°C (optional)",
  "material_type": "All-laser-welded stainless steel for media isolation",
  "degree_of_protection": "IP68 (with cable gland)",
  "power_supply": "5V DC or 8-30V DC",
  "housing": "Compact sealed stainless steel housing",
  "weight": "NA",
  "display": "NA",
  "case_material": "Stainless steel",
  "mounting": "Threaded process connections: 1/8\" NPT, 1/4\" NPT, 1/2\" NPT, G1/8\", G1/4\", or M20x1.5",
  "operation": "Compact pressure transmitter with all-laser-welded stainless steel sensor body for isolation. Integrated smart signal conditioning electronics and ASIC provide calibration and temperature compensation. Designed for applications in refrigeration, hydraulics, pneumatics, compressors, hydrogen storage, and process control. Overpressure protection up to 2x full scale. Multiple output options including voltage and current outputs. Stability rated at 0.25% FS/year. Suitable for harsh industrial environments with CE certification."
  },
  {
  "fluid_type": "Liquids, gases, steam (including corrosive media when using appropriate materials and isolation flanges)",
  "measurement": "Differential pressure, pressure, fluid level, and flow measurement",
  "product_name": "3351DPT Differential Pressure Transmitter",
  "accuracy": "±0.075% (linear output), ±0.1% (full scale), stability ±0.15%FS/year",
  "diameter": "NA (process connections M20×1.5 or NPT1/2)",
  "line_size": "NA",
  "measurable_conductivity": "NA (pressure-based measurement independent of conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire loop powered, M20×1.5 or NPT1/2 conduit, explosion-proof impulse terminals",
  "communication_protocol": "4-20mA DC, RS485 digital communication, optional HART protocol",
  "diagnostic_function": "Built-in diagnostics: zero stability (ZSC), temperature compensation (TSC), error codes, signal integrity checks",
  "output": "4-20mA DC (2-wire), RS485 digital output, HART (optional)",
  "input": "Loop powered (16-48V DC, typically 24V DC)",
  "process_temperature": "-25°C to 100°C (with isolation diaphragm and fill fluid options for higher ranges)",
  "operating_temperature": "Ambient: -20°C to +80°C; Storage: -40°C to +104°C",
  "material_type": "Diaphragm: 316L SS, Hastelloy C, Monel, Tantalum; Housing: Aluminum alloy (polyurethane coated)",
  "degree_of_protection": "Explosion-proof (Ex ia II CT5) intrinsically safe design; IP-rated sealed housing",
  "power_supply": "16-48V DC loop powered",
  "housing": "Compact aluminum alloy housing with explosion-proof and intrinsically safe options",
  "weight": "Approx. 0.75 kg",
  "display": "Digital LCD head showing pressure, temperature, current, and analog bar (0-100%)",
  "case_material": "Aluminum alloy with polyurethane paint; wetted parts in SS316L or optional corrosion-resistant alloys",
  "mounting": "Direct threaded (M20×1.5, NPT1/2), flange-mounted (single/double-flat, in-line flanges), bracket-supported installations",
  "operation": "Works on capacitance-based differential pressure principle with a piezoresistive sensor. Converts pressure difference into electrical signals processed by a 16-bit microprocessor with digital signal processing. Offers zero and span adjustments, damping (0-30 sec), remote calibration via RS485 or HART, and menu-driven configuration. Suitable for flow (with orifice plates), fluid level, and pressure in liquids, gases, or steam. Explosion-proof and intrinsically safe for hazardous areas. Supports mounting for dry/wet impulse lines, flange connections, and remote capillary installations for high-viscosity or crystallizing fluids. Error minimization methods include proper impulse piping design, equal temperature conduits, and correct vent/drain placement."
  },
  {
  "fluid_type": "Fluids, paste, coarse bulk materials, solids",
  "measurement": "Non-contact continuous level measurement",
  "product_name": "LTU Ultrasonic Level Transmitter (LTU2XX Series)",
  "accuracy": "±0.3%",
  "diameter": "NA (process connection varies: BSPT/NPT/M65X1.5mm threads)",
  "line_size": "NA",
  "measurable_conductivity": "NA (ultrasonic principle does not require conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire loop powered connection with gland entry 2XM20X1.5",
  "communication_protocol": "4-20mA, optional HART, RS485/RS232 serial data",
  "diagnostic_function": "Self-diagnostics with error codes for installation issues, voltage problems, interference, and pulse intensity setup",
  "output": "4-20mA, relay outputs (SPST), RS485/RS232 serial data",
  "input": "12-24VDC (standard), 19-30VDC (HART), 24VDC (RS485/RS232)",
  "process_temperature": "-20°C to +70°C (depending on material and version: PVC, CPVC, PVDF variants)",
  "operating_temperature": "Ambient: -10°C to +60°C (varies by housing and material selection)",
  "material_type": "Sensor housing materials: PVC, CPVC, PVDF",
  "degree_of_protection": "IP65 (Plastic), IP67 (Nylon), NEMA 4X (PBT Valox), Explosion-proof (Aluminum XP Housing)",
  "power_supply": "12-24VDC standard, 19-30VDC with HART, or 24VDC for RS485/RS232",
  "housing": "Plastic, Nylon, PBT (Valox), or Cast Aluminum (XP housing for hazardous areas)",
  "weight": "NA",
  "display": "4-digit or 7-digit LCD display",
  "case_material": "PVC, CPVC, PVDF, or Aluminum (depending on selected model)",
  "mounting": "Top-of-tank installation, perpendicular to the surface; includes options for waveguide pipe use in turbulent or foamy applications",
  "operation": "Operates on ultrasonic time-of-flight principle, transmitting sound pulses and measuring echo time to determine level. Includes digital temperature compensation for accurate sound speed correction, adjustable pulse intensity (1–15 levels), manual factory reset, damping adjustment for turbulence, foam mitigation using beam guides, and setup for start/end range. Suitable for harsh environments with dust, moisture, and corrosive gases. Supports RS485/RS232 for integration with DCS/PLC systems and provides troubleshooting for voltage, skewed installation, interference, and improper pulse setup."
  },
  {
  "fluid_type": "Liquids, solids, pastes, coarse bulk materials",
  "measurement": "Non-contact continuous level measurement using radar",
  "product_name": "LTR Radar Level Transmitter (LTR5X Series)",
  "accuracy": "±3mm or better depending on model and range",
  "diameter": "NA (antenna-based, various sizes and beam angles)",
  "line_size": "NA",
  "measurable_conductivity": "NA (radar level measurement independent of conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire or 4-wire (M20x1.5 or ½ NPT cable entry); screened cables recommended with grounding",
  "communication_protocol": "4-20mA (2-wire/4-wire), HART, RS232 (via COMWAY converter)",
  "diagnostic_function": "Self-diagnostics, echo curve storage, false echo suppression, error codes for hardware faults, ROM errors, and system logging",
  "output": "4-20mA DC, HART signal, configurable simulation outputs (percent/current/distance)",
  "input": "24VDC (22.8–26.4V), or 198–242VAC for 4-wire models; intrinsically safe models require safety barrier",
  "process_temperature": "From -60°C to +400°C depending on antenna material and seal (Viton, Kalrez, Graphite options)",
  "operating_temperature": "Ambient: -40°C to +80°C; Storage/Transport: -40°C to +100°C",
  "material_type": "Antenna options in PTFE, SS316L, PP, with optional shields or parabolic reflectors",
  "degree_of_protection": "IP66/IP67 (plastic, aluminum, stainless steel housings); Explosion-proof (Ex ia/Exd ia IIC T6) versions available",
  "power_supply": "24VDC (loop powered) or 198–242VAC (4-wire); intrinsically safe versions with barriers",
  "housing": "Aluminum, stainless steel 316L, or plastic (IP66/IP67 rated), single or dual-chamber options",
  "weight": "NA (varies by antenna and housing type)",
  "display": "LCD with keypad (adjustment and diagnostics), pluggable display module for configuration",
  "case_material": "Aluminum (painted), SS316L, or plastic (IP66/IP67)",
  "mounting": "Threaded (G1½, NPT1½), flanged (DN50–DN200), or standpipe; proper installation to avoid false echoes",
  "operation": "Uses 26 GHz radar pulses for level measurement. Supports basic and advanced parameter settings: min/max adjustment, medium selection (liquid/solid), damping, mapping curves, foaming/powder compensation, false echo storage, tube measurement mode, micro DK settings, and HART multidrop. Diagnostics include echo curve viewing, current output simulation, and fault logging. Explosion-proof and intrinsically safe designs available. Flexible antenna designs (horn, parabolic, rod) for various process conditions and beam angles. Integration with PLC/DCS through HART or analog signals."
  },
  {
  "fluid_type": "Liquids, solids, powders, and pastes (including corrosive and severe ambient conditions)",
  "measurement": "Continuous level measurement using guided wave radar (rod, rope, or coaxial probes)",
  "product_name": "LTG Guided Wave Radar Level Transmitter (LTG5X Series)",
  "accuracy": "±2.5 mm (rod), ±10 mm (rope)",
  "diameter": "NA (depends on process connection: G1½A, G2A, 1½NPT, DN flanges)",
  "line_size": "NA",
  "measurable_conductivity": "NA (radar level measurement independent of conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire or 4-wire with shielded cables; M20x1.5 or ½ NPT cable entries; grounding required",
  "communication_protocol": "4-20mA with HART (2-wire or 4-wire), RS232 (via COMWAY converter)",
  "diagnostic_function": "Self-diagnostics with echo discovery, error codes (hardware, wiring, grounding faults), false echo suppression, echo curve display",
  "output": "4-20mA DC with HART (linear), failure mode hold (22 mA) or low (3.6 mA)",
  "input": "Standard: 24VDC (16–26V), Intrinsically Safe: 22.8–26.4VDC, Explosion-proof: 198–242VAC or 24VDC",
  "process_temperature": "LTG51/52/56: -40°C to +150°C; LTG54: -40°C to +200°C; LTG55/56: -200°C to +400°C",
  "operating_temperature": "Ambient: -40°C to +80°C; Storage/Transport: -40°C to +100°C",
  "material_type": "Probe: SS316L/PTFE/Ceramic; Seals: Viton, Kalrez; Housing: Aluminum, SS316L, or Plastic",
  "degree_of_protection": "IP66/IP67 (housing), Ex ia IIC T6 (intrinsically safe), Exd ia IIC T6 (explosion-proof)",
  "power_supply": "2-wire: 24VDC; 4-wire: 24VDC or 198–242VAC",
  "housing": "Aluminum (painted), SS316L, or Plastic single/dual-chamber explosion-proof housings",
  "weight": "LTG51: 9 kg; LTG52: 5.5 kg; LTG53: 6 kg; LTG54: 12 kg; LTG55: 9 kg; LTG56: 9 kg (varies with probe length and connection)",
  "display": "Pluggable LCD with ViewPoint module (adjustment and diagnostics)",
  "case_material": "Aluminum, SS316L, or Plastic (depending on housing type)",
  "mounting": "Threaded (G1½, G2A, 1½NPT), flanged (DN50–DN150), center-mounted on flat or conical vessels, perpendicular probe orientation avoiding obstructions",
  "operation": "Operates on time-of-flight principle using microwave pulses guided along rod, rope, or coaxial probes. Supports high/low dielectric media, foam, turbulence, and high-pressure conditions (up to 400 bar). Features include echo discovery processing, false echo suppression, adjustable damping (0–40s), temperature compensation, HART communication, and echo curve visualization. Explosion-proof and intrinsically safe models allow installation in hazardous zones with mandatory grounding and certified barriers. Supports pluggable ViewPoint display or software/HART handheld adjustment, echo mapping, and custom range configuration."
  },
  {
  "fluid_type": "Liquids, conductive/corrosive materials, powders, solids, low moisture and non-conductive materials",
  "measurement": "Continuous level measurement using RF-capacitance principle",
  "product_name": "LTC Capacitance Level Transmitter (Techcap LTC21XX Series)",
  "accuracy": "±1% FS (at 25°C)",
  "diameter": "NA (depends on process connection size)",
  "line_size": "NA",
  "measurable_conductivity": "NA (works with conductive and non-conductive media using capacitance principle)",
  "electrode_type": "Probe type (rod, wire, anti-corrosion coated PVDF/PP/FEP variants available)",
  "wiring": "2-wire loop powered (12-36V DC) with IP65 cable glands",
  "communication_protocol": "4-20mA output (analog), compatible with control systems (no digital protocol)",
  "diagnostic_function": "Self-calibration (any 2 points), temperature compensation ±0.02% FS/°C, dual protection housing (LTC2101), fault detection via output latch (3.5–22 mA)",
  "output": "4-20mA DC (linear), latchable output range: 3.5–22 mA",
  "input": "12-36V DC",
  "process_temperature": "Standard: -40°C to 100°C, Hi-temp: -40°C to 200°C",
  "operating_temperature": "Ambient: -40°C to 80°C",
  "material_type": "Probe: SS304, SS316; Coated variants: PVDF, PP, FEP; Weight material: Ceramic/PTFE",
  "degree_of_protection": "IP65 (standard and anti-corrosion), Explosion-proof for LTC2121–2131 series",
  "power_supply": "12-36V DC (loop powered)",
  "housing": "Protective enclosure with dual-layer fog protection and high-stability design, explosion-proof aluminum housing available",
  "weight": "2.3 kg to 4.2 kg (per 1-meter probe length, varies by model)",
  "display": "LCD display (-1999 to 9999) available for LTC2101, LTC2102, LTC2120 models",
  "case_material": "Aluminum housing (IP65), stainless steel probe, coated materials for corrosive service",
  "mounting": "Threaded or flanged connections (½” to 6”), vertical installation parallel to tank wall with grounding; cable probe fixed with ceramic isolators in tanks",
  "operation": "Operates on RF-capacitance principle where capacitance changes with material dielectric constant variations. Suitable for high temperature, high pressure, and corrosive environments. Features include easy 2-point calibration, temperature compensation, zero blind distance, compatibility with large and irregular tanks, anti-corrosion coatings for aggressive media, and explosion-proof options. Installation involves proper grounding, probe positioning parallel to tank wall, and use of metal reference tube in non-conductive tanks. Available in rod or wire probe forms with anti-corrosion coatings (PVDF, PP, FEP) for conductive or corrosive media. Multi-function and compact models include output latch functions and LCD displays."
  },
  {
  "fluid_type": "Liquids, water (including agitated environments), mildly corrosive liquids, hydraulic and pneumatic systems",
  "measurement": "Hydrostatic pressure-based continuous level measurement",
  "product_name": "LTH Hydrostatic Level Transmitter (TechHydro – LTH Series)",
  "accuracy": "Linearity ±0.3% FS, Long-term stability <0.1%",
  "diameter": "NA (depends on flange/screw connection)",
  "line_size": "Varies based on connection sizes: 1/2\" to 6\" (15A to 150A)",
  "measurable_conductivity": "NA (pressure-based measurement not dependent on conductivity)",
  "electrode_type": "NA",
  "wiring": "2-wire loop-powered (shielded insulated cable required, IP65 cable gland entry M20x1.5)",
  "communication_protocol": "4-20mA analog output (no digital protocol)",
  "diagnostic_function": "NA (manual zero and span adjustments provided)",
  "output": "4-20mA (loop resistance <500Ω)",
  "input": "13-36V DC supply",
  "process_temperature": "Standard models: -10°C to 80°C; High-temp model (LTH120): -10°C to 150°C",
  "operating_temperature": "Ambient: up to 60°C",
  "material_type": "Wetted parts: SS304/SS316; Housing: Aluminum (IP65 rated)",
  "degree_of_protection": "IP65",
  "power_supply": "13-36V DC loop power",
  "housing": "Aluminum, vertical or side-mounted electrical housing",
  "weight": "Varies by model (e.g., LTH100: ~4.2 kg per meter, LTH180: ~250 g)",
  "display": "NA (optional connection to external panel meters or PLCs)",
  "case_material": "Aluminum housing; SS304/SS316 wetted materials",
  "mounting": "Top, bottom, or side mounting; flange or threaded (1/2\" to 6\" sizes) connections; vertical positioning recommended",
  "operation": "Operates using a piezoresistive Wheatstone bridge pressure sensor filled with silicon oil. Measures liquid level by correlating hydrostatic pressure to height (P = ρ × H). Models include extension tube/cable, flange types, and pressure transducer variants. Equipped with temperature compensation for reliable readings in weak acid/alkaline and sewage environments. Supports zero and span manual adjustment (4mA empty, 20mA full). Installation requires shielded wiring, breather capillary maintenance, avoidance of crystallizing liquids, vibration handling precautions, and no vacuum conditions in tanks. Suitable for deep reservoir measurement and pressure control devices in hydraulics/pneumatics."
  },
  {
  "fluid_type": "Liquids in applications such as chromate/cyanide treatment plants, swimming pools, industrial water systems",
  "measurement": "pH measurement (0.00–14.00 pH), ORP measurement (-1000 to +1000 mV), temperature measurement and compensation",
  "product_name": "RPA & ROA – pH and ORP Analyser",
  "accuracy": "pH: ±0.01 pH, ORP: ±1 mV",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (electrode-based measurement independent of conductivity)",
  "electrode_type": "Glass pH electrode, Antimony pH electrode, ORP electrode (autoclean sensors available)",
  "wiring": "RTD Pt100 temperature input (2/3-wire), dual electrode inputs, relay contacts SPDT 220V 5A",
  "communication_protocol": "RS232 isolated output for pH, ORP, and temperature data transfer",
  "diagnostic_function": "Automatic overload protection and reset, dual filter software, auto/manual calibration parameters, EEPROM storage, continuous/flashing alarms",
  "output": "Analog outputs: 0-20 mA or 4-20 mA (pH/ORP/temperature selectable), dual relay outputs (SPDT 220V 5A), proportional control (PFM/PWM)",
  "input": "Electrode inputs (pH/ORP), RTD Pt100 (2/3-wire) for temperature compensation",
  "process_temperature": "Measurement and compensation range: 0°C to +100°C",
  "operating_temperature": "Ambient: standard for panel-mounted instruments (96x96mm 1/4 DIN housing)",
  "material_type": "NA (panel mount electronic unit with compatible electrode sensors)",
  "degree_of_protection": "NA (dependent on housing and installation)",
  "power_supply": "24V AC (B1) or 9–36V DC (B2)",
  "housing": "96x96mm (1/4 DIN) panel-mounted housing",
  "weight": "NA",
  "display": "Digital readout for pH, ORP (mV), temperature, calibration, alarms, and setpoints",
  "case_material": "NA (industrial-grade electronic enclosure for panel mounting)",
  "mounting": "Panel-mounted with electrode and RTD sensor installation in process line/tank",
  "operation": "Measures pH, ORP, and temperature using electrodes with automatic/manual temperature compensation. Supports dual setpoints, ON/OFF control, PFM (pulse frequency modulation), PWM (pulse width modulation), hysteresis and delay settings. Auto-clean sensor functionality included. EEPROM storage for parameters, continuous and timed alarms, and RS232 data transfer for integration with computers or PLC systems. Calibration adjustments include zero/slope for pH and ORP electrodes, and Pt100 input for temperature. Commonly used in industrial treatment plants and water monitoring applications."
  },
  {
  "fluid_type": "Liquids requiring turbidity monitoring (e.g., water, wastewater, industrial fluids)",
  "measurement": "Turbidity (NTU), mg/L, ppm",
  "product_name": "RTA Turbidity Analyser",
  "accuracy": "Resolution: 0.05% of scale; Response time: 10s for 98% of input",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (optical turbidity measurement independent of conductivity)",
  "electrode_type": "NA (uses preamplified optical turbidity sensor)",
  "wiring": "Relay contacts (5A, 220V), isolated analog output terminals, autoclean relay control wiring",
  "communication_protocol": "NA (analog isolated output provided)",
  "diagnostic_function": "Dual filter software (90%RT), dirty lens check, burned lamp alarm, continuous/flashing alarms",
  "output": "0/20 or 4/20 mA isolated analog output (programmable scale); relay outputs for alarms and autoclean",
  "input": "Preamplified turbidity sensor signal input",
  "process_temperature": "NA",
  "operating_temperature": "Humidity: up to 95% (non-condensing); standard industrial conditions",
  "material_type": "NA (analyzer unit is electronic housing, sensor material not specified)",
  "degree_of_protection": "NA (panel mount device, housing dependent)",
  "power_supply": "110/220V AC ±10%, 50/60 Hz, 5 VA max",
  "housing": "Panel-mounted (96x96x155 mm, 1/4 DIN enclosure)",
  "weight": "NA",
  "display": "Digital display with 3 software access levels (display, calibration, configuration)",
  "case_material": "NA",
  "mounting": "Panel-mounted (96x96 DIN standard) with sensor installed in process line or tank",
  "operation": "Measures turbidity in NTU, mg/L, or ppm using an optical sensor with programmable filtering (dual filter software for fast/slow changes). Supports manual or automatic zero calibration, automatic or manual cleaning cycles with programmable intervals, high/low turbidity alarms, dirty lens detection, burned lamp alarm, adjustable coefficients for mg/L to NTU conversion (PSL/SiO2), analog output hold during calibration, and fine output adjustment. Provides isolated analog 0/4-20 mA output, dual relay setpoints with hysteresis and delays, and simulated, manual, or automatic operation modes. Designed for water treatment, wastewater monitoring, and process turbidity control applications."
  },
  {
  "fluid_type": "High purity water, microelectronics industry fluids, electroplating solutions, pharmaceutical industry water",
  "measurement": "Conductivity (E.C.) and TDS with temperature compensation",
  "product_name": "RCA Conductivity Analyser",
  "accuracy": "Display resolution: 1/1000 @ 20°C",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "K = 0.01 / 0.10 / 1.0 / 10 cm⁻¹; range: 200nS to 20mS (auto-ranging)",
  "electrode_type": "2-electrode conductivity cells",
  "wiring": "RTD Pt100 (2/3-wire) for temperature; input terminals for conductivity cell",
  "communication_protocol": "RS232 isolated output for conductivity and temperature",
  "diagnostic_function": "Automatic overload protection/reset, dual software filters (90%RT: 0.4–20s), EEPROM parameter storage",
  "output": "Dual isolated analog outputs: 0/20 mA or 4/20 mA programmable (conductivity or temperature selectable); RS232 digital output",
  "input": "Conductivity cell input, RTD Pt100 temperature input (2/3-wire)",
  "process_temperature": "Measurement and compensation range: 0 to +100°C",
  "operating_temperature": "Standard for panel-mounted electronic instruments",
  "material_type": "NA (panel mount instrument, sensor-dependent materials)",
  "degree_of_protection": "NA (housing dependent on installation, standard panel-mount protection)",
  "power_supply": "B1: 24V AC; B2: 9–36V DC",
  "housing": "96x96 mm (1/4 DIN) panel-mounted housing",
  "weight": "NA",
  "display": "Digital readout for conductivity (µS/mS/MΩ) and temperature (°C); dual setpoint and alarm indicators",
  "case_material": "NA (industrial-grade panel enclosure)",
  "mounting": "Panel-mounted (96x96 DIN) with remote conductivity cell and RTD sensor installation",
  "operation": "Provides automatic/manual conductivity and TDS measurement with temperature compensation (manual or automatic). Includes dual setpoints with hysteresis and delays, EEPROM storage, high-purity water tables preloaded, continuous/flashing alarms, programmable analog outputs (conductivity or temperature selectable), and RS232 communication for data transfer. Utilizes dual software filters (90%RT) for stable readings and supports calibration adjustments (zero, sensitivity, span). Integrated overload protection and automatic reset enhance reliability for industrial water monitoring."
  },
  {
  "fluid_type": "Drinking water, water treatment, bottling industry applications",
  "measurement": "Residual chlorine (free or total chlorine) measurement",
  "product_name": "RLCA Chlorine Analyser",
  "accuracy": "Resolution: 0.1°C (temperature); sensor current: 160 nA/PPM at 20°C",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (chlorine-specific potentiostatic/polarographic sensors)",
  "electrode_type": "Potentiostatic sensor with Pt100 (3-wire) temperature input; polarographic selective membraned sensors",
  "wiring": "Pt100 temperature input (3-wire), isolated outputs, dual relay connections, extractable terminal block",
  "communication_protocol": "NA (analog outputs, relay control provided)",
  "diagnostic_function": "Dual filter software (90% RT: 0.1–20s), automatic overload protection/reset, continuous/flashing alarms, EEPROM parameter storage",
  "output": "Isolated 0/20 mA or 4/20 mA output (programmable), dual relay for stepping motor, PID control outputs",
  "input": "Sensor inputs (potentiostatic or polarographic chlorine sensors), Pt100 temperature input (3-wire)",
  "process_temperature": "Measurement and compensation: -2°C to 52°C",
  "operating_temperature": "Ambient suitable for panel-mounted instrument (96x96 mm enclosure)",
  "material_type": "NA (sensor and electronic enclosure materials not specified)",
  "degree_of_protection": "NA (standard panel-mount design with extractable terminal block)",
  "power_supply": "230VAC, 110VAC, or 24VDC",
  "housing": "96x96 mm (1/4 DIN panel-mounted enclosure)",
  "weight": "NA",
  "display": "Digital display for chlorine measurement, temperature, calibration parameters, dual setpoints, and alarms",
  "case_material": "NA (industrial-grade panel enclosure)",
  "mounting": "Panel-mounted (1/4 DIN standard) with remote chlorine sensor and Pt100 installation in the process line",
  "operation": "Utilizes potentiostatic or polarographic membrane sensors for chlorine measurement. Includes dual filter software for noise reduction, automatic/manual temperature compensation, PID control (stepping motor outputs), programmable calibration (immediate or postponed), dual alarm setpoints (continuous/flashing), and EEPROM storage for parameters. Supports automatic overload protection and manual or automatic operation modes. Designed for water treatment, drinking water, and bottling applications."
  },
  {
  "fluid_type": "Water, drinking water, fish ponds, food industry, biotechnology, water treatment",
  "measurement": "Dissolved Oxygen (DO) in ppm (mg/L), % air saturation, partial pressure (mmHg), temperature",
  "product_name": "RDO Dissolved Oxygen (DO) Analyser",
  "accuracy": "Display resolution: 1/1000 at 20°C; Temperature resolution: ±0.1°C",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (oxygen measurement does not require conductivity)",
  "electrode_type": "Polarographic high/low current cells, Galvanic cells (DO electrodes with RTD Pt100 temperature input)",
  "wiring": "RTD Pt100 (2/3 wires), isolated outputs, relay contacts, extractable terminal block",
  "communication_protocol": "RS232 isolated output",
  "diagnostic_function": "Automatic overload protection/reset, dual filter software (90%RT: 0.4–20s), EEPROM storage, zero and sensitivity adjustment, alarm indicators",
  "output": "Dual analog isolated outputs (0/20mA or 4/20mA programmable), relay alarm outputs, RS232 output",
  "input": "Polarographic or galvanic DO cells, RTD Pt100 temperature input",
  "process_temperature": "Measuring and compensation: -2°C to +52°C",
  "operating_temperature": "Ambient suitable for panel-mount instrument operation",
  "material_type": "NA (electronic unit with compatible DO probes)",
  "degree_of_protection": "NA (panel-mounted housing dependent on installation)",
  "power_supply": "B1: 24VAC, B2: 9–36VDC",
  "housing": "96x96 mm (1/4 DIN panel-mounted)",
  "weight": "NA",
  "display": "Digital display showing DO (ppm/mg/L), % air saturation, mmHg partial pressure, temperature, calibration parameters, and alarms",
  "case_material": "NA (industrial-grade electronic enclosure)",
  "mounting": "Panel-mounted with remote DO electrode and RTD sensor in the process line or tank",
  "operation": "Measures DO using polarographic or galvanic cells with automatic/manual temperature compensation (RTD Pt100). Supports calibration in air, zero/sensitivity adjustments, salinity, pressure, and humidity compensation. Includes programmable dual setpoints, hysteresis, delays, alarm outputs (continuous/flashing), EEPROM parameter storage, RS232 communication, and isolated 0/4-20mA outputs. Features autoclean relay control, holding function during calibration/cleaning, dual filter software for noise reduction, and automatic overload protection."
  },
  {
  "fluid_type": "Effluent water, wastewater, industrial discharge water (pH, COD, BOD, TSS parameters)",
  "measurement": "Online multi-parameter water quality monitoring (pH, COD, BOD, TSS, Temperature)",
  "product_name": "OCEMS (Online Continuous Effluent Monitoring System)",
  "accuracy": "pH: ±1%, COD: ±5%, BOD: ±5%, TSS: ±5%, Temperature: ±0.5°C",
  "diameter": "NA",
  "line_size": "NA",
  "measurable_conductivity": "NA (focuses on pH, COD, BOD, TSS)",
  "electrode_type": "Industrial pH electrode, COD/BOD/TSS optical sensors with integrated cleaning brushes",
  "wiring": "RS485 shielded wiring for sensors (MODBUS RTU); color-coded AWG-24 or AWG-26 cables",
  "communication_protocol": "RS485 MODBUS RTU, Gateway supports Modbus/MQTT/HTTP/TCP",
  "diagnostic_function": "Self-cleaning sensors, calibration alerts, error codes for connectivity, power, and measurement faults",
  "output": "RS485 MODBUS, HMI display data output, cloud data upload via 4G IoT gateway",
  "input": "DC power for sensors (6–12VDC pH sensor, 12VDC COD/BOD sensor), AC/DC panel power for system",
  "process_temperature": "Sensors: pH 0–50°C; COD/BOD/TSS: +5°C to 45°C",
  "operating_temperature": "Ambient: 0–50°C; Storage: 0–60°C, ≤85%RH (non-condensing)",
  "material_type": "Sensors: POM/SS316L; Housing: ABS, Aluminum for gateway and HMI panel",
  "degree_of_protection": "Sensors: IP68 (submersible); HMI: IP65; Gateway: IP20/IP65",
  "power_supply": "Sensor: 6–12VDC (pH), 12VDC (COD/TSS/BOD); HMI: 24VDC; Gateway: 24–30VDC",
  "housing": "Panel-mounted IP65 housing with integrated HMI, RS485 terminals, and 4G gateway",
  "weight": "HMI: 750 g; sensors: varies (COD: ~54×325.5mm, pH: ~26×167.5mm)",
  "display": "7” Touchscreen HMI (800x480 px) with real-time parameter display, logs, and control",
  "case_material": "Sensors: SS316L/POM; Panel: ABS+PC plastic; Gateway: ABS",
  "mounting": "Panel-mounted system with wall/DIN rail gateway, flow cell assemblies for sensors (inlet pressure <1 bar, flow ~200 ml/min)",
  "operation": "Integrated multi-parameter effluent monitoring system combining pH, COD, BOD, and TSS sensors with automatic cleaning and calibration. Data displayed on HMI and transmitted via RS485 MODBUS and 4G IoT gateway using MQTT/HTTP protocols. Sensors feature self-cleaning wipers, UV LED for COD/BOD, industrial pH electrode with temperature compensation, and TSS optical detection. Flow cell assembly maintains constant sample flow (200 ml/min). Supports remote calibration, cloud-based reporting, PLC/SCADA integration, and includes alarms for sensor faults, power loss, and water flow issues. Maintenance involves routine sensor cleaning, calibration, and brush inspection (every 18 months)."
  }


]

// businessDetails.js
export const businessDetails = [
  {
    slug: "stp",
    title: "STP (Sewage Treatment Plant)",
    routeLink: "/business/stp", // use this in cards/menus
    icon: "bi bi-water",
    themeClass: "text-warning",

    whyNeeded: `Water is one of the most valuable resources on our planet, yet every day, vast quantities of it are polluted by
    human and industrial activity. Untreated sewage is a major contributor to environmental degradation — contaminating
    rivers, lakes, and groundwater, spreading diseases, and harming aquatic life. Governments, industries, and communities
    worldwide are under increasing pressure to ensure that wastewater is treated before being released back into the
    environment. This is where Sewage Treatment Plants (STPs) play a critical role.`,

    whatItDoes: `An STP processes wastewater from homes, offices, institutions, and industries, removing harmful contaminants, organic
    matter, and pathogens. The treated water is then safe to discharge into the environment or reuse for non-potable purposes
    such as landscaping, cooling towers, and flushing systems.`,

    processFlow: [
      "Preliminary Treatment – Screening and grit removal to eliminate large solids, debris, and sand.",
      "Primary Treatment – Sedimentation tanks allow heavier particles to settle, reducing suspended solids.",
      "Secondary (Biological) Treatment – Microorganisms break down organic pollutants in aeration tanks.",
      "Tertiary Treatment – Advanced filtration, chlorination, or UV disinfection to remove remaining pathogens and impurities.",
      "Sludge Treatment – Dewatering and safe disposal or conversion of sludge into manure or biogas."
    ],

    environmentBenefits: [
      "Pollution Prevention – Stops harmful chemicals, waste, and pathogens from contaminating natural water bodies.",
      "Water Conservation – Treated water can be reused, reducing the strain on freshwater sources.",
      "Biodiversity Protection – Protects aquatic ecosystems and wildlife habitats.",
      "Climate Impact Reduction – Modern STPs can produce biogas, lowering greenhouse gas emissions."
    ],

    industryBenefits: [
      "Regulatory Compliance – Meets environmental standards, avoiding fines and legal action.",
      "Cost Savings – Recycled water can reduce dependency on costly freshwater sources.",
      "Sustainability Goals – Enhances corporate image and meets CSR commitments.",
      "Operational Safety – Prevents foul odors, disease spread, and equipment corrosion caused by untreated wastewater."
    ],

    purpose: [
      "Mandatory Requirement – In many regions, STPs are legally required for residential complexes, commercial buildings, hotels, hospitals, and industries.",
      "Resource Recovery – Converts waste into usable water and by-products.",
      "Sustainability Commitment – Reduces environmental footprint and promotes long-term resource security."
    ],

    industriesNeed: [
      "Residential townships & apartment complexes",
      "Hotels and resorts",
      "Hospitals and healthcare facilities",
      "Manufacturing units",
      "Food & beverage processing plants",
      "Educational institutions & corporate campuses",
      "Government and defense facilities"
    ],

    yngSpecialityIntro: `At YNG Infra, we go beyond standard STP installations — we design smart, future-ready sewage treatment
    systems that deliver maximum efficiency, minimal maintenance, and long operational life.`,

    yngSpecialityPoints: [
      "Customized Designs – Each STP is tailored to the client’s water load, space availability, and reuse goals.",
      "Advanced Technology – Incorporating MBBR, SBR, MBR, and other cutting-edge treatment processes.",
      "Energy Efficiency – Low power consumption with optimized aeration and automation.",
      "Space-Saving Solutions – Compact modular designs for urban settings.",
      "End-to-End Service – From design and installation to training, operation, and maintenance support.",
      "Regulatory Expertise – Ensuring full compliance with local and international environmental standards."
    ],

    conclusion: `With YNG Infra, you don’t just get a sewage treatment plant — you get a sustainable water management
    solution that protects the environment, saves resources, and adds long-term value to your business or community.`
  },
  {
  slug: "etp",
  title: "ETP (Effluent Treatment Plant)",
  routeLink: "/business/etp",
  icon: "bi bi-recycle",
  themeClass: "text-warning",

  whyNeeded: `Industrial processes generate effluents with high TSS, BOD, COD, oil & grease, color, nutrients, and heavy metals.
  If discharged untreated, these pollutants damage water bodies, soil, and public health. Regulations (CPCB/SPCB) mandate
  treatment before discharge, and increasing water stress pushes industries to recycle and reuse water. ETPs make compliance
  and water-reuse possible.`,

  whatItDoes: `An ETP treats industrial wastewater to remove suspended solids, organic load, oils, metals, and toxic compounds; adjusts pH;
  disinfects; and polishes water for safe discharge or reuse in utilities (cooling towers, boiler feed pre-treatment, gardening) or
  for ZLD schemes.`,

  processFlow: [
    "Collection & Equalization – Buffer flow/quality variations for steady treatment.",
    "Screening & Oil/Grit Removal – Bar screens, oil traps, and grit chambers.",
    "pH Correction/Neutralization – Acid/alkali dosing to optimal reaction range.",
    "Coagulation–Flocculation – Chemical addition with rapid/slow mixing for colloid removal.",
    "Primary Clarification / DAF – Settle or float floc and fats/oils.",
    "Biological Treatment – ASP/MBBR/SBR/UASB to reduce BOD/COD biologically.",
    "Secondary Clarifier – Separate biomass and produce clarified effluent.",
    "Tertiary Polishing – Pressure sand filter, activated carbon filter, cartridge filters; optional UF.",
    "Advanced Treatment (Reuse/ZLD) – RO/DTRO; evaporator (MEE) and ATFD/crystallizer if ZLD required.",
    "Disinfection – UV/chlorination/ozonation as needed.",
    "Sludge Handling – Thickening, filter press/centrifuge; safe disposal as per norms."
  ],

  environmentBenefits: [
    "Major pollutant load reduction (BOD/COD/TSS, color, O&G, metals).",
    "Protects rivers, lakes, and groundwater from toxic discharge.",
    "Enables reuse, reducing freshwater extraction and stress on local sources.",
    "Supports ZLD policies, minimizing liquid discharge.",
    "Proper sludge management prevents secondary pollution."
  ],

  industryBenefits: [
    "Regulatory compliance and smooth consent/renewals with SPCB/CPCB.",
    "Lower water costs via recycle for cooling/process and utility makeup.",
    "Reduced discharge penalties/cess and better ESG/CSR ratings.",
    "Protects equipment (piping, exchangers, cooling towers) from fouling/corrosion.",
    "Scalable, modular systems that grow with production."
  ],

  purpose: [
    "Meet statutory discharge norms and buyer audit requirements.",
    "Achieve water-reuse/neutrality targets and resilience during scarcity.",
    "Enable ZLD where mandated or strategically beneficial."
  ],

  industriesNeed: [
    "Chemicals & Petrochemicals",
    "Pharmaceuticals & Biotech",
    "Textiles & Dyeing",
    "Food & Beverage",
    "Pulp & Paper",
    "Refineries & Oil & Gas",
    "Metal Finishing & Electroplating",
    "Tanneries",
    "Power Plants",
    "Automotive",
    "Mines & Mineral Processing"
  ],

  yngSpecialityIntro: `YNG Infra delivers tailor-made, turnkey ETPs engineered for complex and variable industrial effluents—focused on compliance, reuse, and lifecycle cost.`,

  yngSpecialityPoints: [
    "Influent characterization & jar/treatability studies before design.",
    "Right-fit tech selection: DAF, MBBR, SBR, UASB, MBR, UF/RO; MEE/ATFD for ZLD.",
    "PLC/SCADA automation, remote monitoring, alarms, and reports.",
    "Energy & chemical optimization (VFD blowers, optimized dosing).",
    "Compact skid-mounted and modular layouts for space-constrained sites.",
    "Retrofits & upgrades to improve legacy ETP performance.",
    "O&M, AMC, and operator training for reliable, safe operations.",
    "Compliance documentation and liaison support with SPCB/CPCB.",
    "Performance guarantees on treated water quality and reuse KPIs."
  ],

  conclusion: `Partner with YNG Infra for a compliant, efficient, and future-ready ETP—cut operating costs, reach reuse/ZLD targets, and protect the environment while keeping production running smoothly.`
  },
  {
  slug: "wtp",
  title: "WTP (Water Treatment Plant)",
  routeLink: "/business/wtp",
  icon: "bi bi-droplet-half",
  themeClass: "text-warning",

  whyNeeded: `Raw water from borewells, rivers, lakes, and municipal sources often contains turbidity, hardness, iron/manganese, TDS, color, odor, and microbes.
  Without proper treatment, it causes scaling/corrosion, equipment failures, product-quality issues, and health risks. A WTP ensures safe, consistent,
  and compliant water for drinking and process applications, even as source quality fluctuates seasonally.`,

  whatItDoes: `A WTP treats raw water to defined quality targets (potable or process-spec). It removes suspended solids, hardness, iron/metals, organics, color/odor,
  and pathogens; reduces TDS where required; stabilizes pH/alkalinity; and delivers clear, safe, and consistent water for distribution and use.`,

  processFlow: [
    "Intake, Screening & Raw Water Storage – Capture and buffer feed; remove coarse debris.",
    "Aeration/Oxidation – Pre-oxidize Fe/Mn, strip gases, improve coagulation.",
    "Coagulation–Flocculation – Chemical addition and mixing to aggregate colloids.",
    "Clarification – Tube/lamella settlers or clariflocculators to remove floc.",
    "Filtration – Pressure sand / rapid gravity filters to polish turbidity.",
    "Activated Carbon Filtration – Remove organics, color, taste & odor, residual chlorine.",
    "Softening / Ion Exchange – Reduce hardness; optionally DM/MB for low-conductivity needs.",
    "Membrane Treatment (as needed) – UF for pathogen/turbidity barrier; RO/DTRO for TDS reduction.",
    "pH Correction & Stabilization – Corrosion/scale control; remineralization for palatability.",
    "Disinfection – UV/chlorination/ozonation to inactivate pathogens and maintain residual.",
    "Storage & Distribution – Hygienic tanks, booster pumps, and monitored distribution.",
  ],

  environmentBenefits: [
    "Reduces bottled-water dependency and plastic waste through on-site safe water.",
    "Optimizes chemical/energy use with right-sized unit operations.",
    "Enables water reuse integration (UF/RO permeate blending) to conserve freshwater.",
    "Protects downstream systems from scaling/corrosion, extending asset life."
  ],

  industryBenefits: [
    "Quality & Consistency – Stable water quality for process and utilities.",
    "Protects Equipment – Minimizes scaling/corrosion in boilers, cooling towers, and process lines.",
    "Compliance & Audits – Helps meet internal specs and regulatory/standard guidelines.",
    "Opex Savings – Fewer breakdowns, lower chemical use, and improved uptime.",
    "Product Quality – Critical for pharma, F&B, electronics, and high-spec applications."
  ],

  purpose: [
    "Produce potable water for campuses, hotels, hospitals, and residential townships.",
    "Supply process water meeting hardness/TDS/microbiological limits for industry.",
    "Condition make-up water for boilers and cooling towers.",
    "Stabilize variable source water quality across seasons and locations."
  ],

  industriesNeed: [
    "Residential Townships & Commercial Complexes",
    "Hospitals, Hotels & Institutions",
    "Pharmaceuticals & Biotech",
    "Food & Beverage Processing",
    "Power & Utilities (Boiler/Cooling Tower Make-up)",
    "Electronics & Precision Manufacturing",
    "Automotive & General Manufacturing",
    "Municipal & Community Water Supply"
  ],

  yngSpecialityIntro: `YNG Infra designs application-specific WTPs based on source-water analytics and end-use quality targets—balancing performance, footprint, and lifecycle cost.`,

  yngSpecialityPoints: [
    "Raw water analysis and pilot/jar testing to select the right train.",
    "Technology stack: PSF/ACF, softeners, DM/MB, UF/RO, advanced oxidation, UV/ozone, remineralization.",
    "Hygienic design options for pharma/F&B (SS316L skids, sanitary piping, validated layouts).",
    "PLC/SCADA automation with online turbidity, pH, ORP, conductivity, and flow monitoring.",
    "CIP systems for membranes/filters; chemical & energy optimization with VFDs and smart dosing.",
    "Modular, skid-mounted plants for fast deployment and easy expansion.",
    "Retrofits/upgrades of legacy WTPs to improve output quality and reduce OPEX.",
    "AMC/O&M packages, operator training, and audit/compliance documentation."
  ],

  conclusion: `Choose YNG Infra for a robust, low-maintenance WTP that delivers safe, consistent water—protecting your assets, improving product quality, and reducing total cost of ownership.`
 },
 {
  slug: "school-automation",
  title: "Automation for Schools",
  routeLink: "/business/school-automation",
  icon: "bi bi-mortarboard",
  themeClass: "text-warning",

  whyNeeded: `Schools manage thousands of daily events—attendance, security, fees, transport, announcements, exams, and communication.
  Manual handling causes delays, errors, and safety gaps. Automation centralizes operations, improves safety and transparency,
  and keeps parents, teachers, and administrators aligned in real time.`,

  whatItDoes: `A unified platform that digitizes campus operations—smart attendance, secure access control, transport tracking,
  digital notices, timetable & exam management, fee workflows, and analytics—integrated with existing ERP/LMS and hardware (RFID/NFC, CCTV, GPS).`,

  processFlow: [
    "Smart Entry & Attendance – RFID/NFC/Biometric at gates/classrooms with auto SMS/app notifications to parents.",
    "Access Control & Visitor Management – QR/OTP visitor passes; restricted zones for staff/students.",
    "Smart Transport – Live GPS bus tracking, geo-fencing, route optimization, student boarding alerts.",
    "Timetable, Exams & Scheduling – Publish timetables, invigilation, room allocation, results workflows.",
    "Communication Hub – App/WhatsApp/SMS push for circulars, events, emergency alerts, homework.",
    "Fees & Finance – Online payments, receipts, dues reminders, integration with accounting/ERP.",
    "Asset & Facility Management – Lab/IT asset logs, complaints/tickets, AMC reminders.",
    "Safety & Surveillance – CCTV integration, emergency SOPs, panic alerts, audit trails.",
    "Dashboards & Analytics – Attendance trends, bus KPIs, fee collections, performance insights."
  ],

  environmentBenefits: [
    "Paperless administration via digital circulars, attendance, and reports.",
    "Optimized transport routes reduce idling, fuel use, and emissions.",
    "Smart energy schedules (lighting/HVAC) lower campus power consumption."
  ],

  industryBenefits: [
    "Student Safety – Real-time entry/exit logs, bus tracking, emergency alerts.",
    "Operational Efficiency – Automated attendance, fees, and communication save staff time.",
    "Parent Engagement – Instant updates via app/SMS improve transparency and trust.",
    "Data Accuracy & Audits – Centralized records with traceable logs for inspections.",
    "Cost Control – Route optimization, energy schedules, and reduced paperwork lower OPEX."
  ],

  purpose: [
    "Digitize attendance, fees, transport, and communication for faster, error-free operations.",
    "Strengthen campus security with access control and visitor management.",
    "Provide real-time visibility to parents and administrators.",
    "Standardize processes and maintain compliance-ready audit trails."
  ],

  industriesNeed: [
    "K–12 Schools (CBSE/ICSE/State Boards)",
    "Colleges & Universities",
    "Coaching/Training Institutes",
    "Hostels & Residential Schools",
    "Pre-schools & Daycare Centers",
    "Skill Development Centers"
  ],

  yngSpecialityIntro: `YNG Infra delivers end-to-end school automation—hardware + software + integrations—tailored to your campus size, policies, and budget.`,

  yngSpecialityPoints: [
    "Modular platform: start with attendance/transport and scale to full campus automation.",
    "Seamless integrations with ERP/LMS, payment gateways, SMS/WhatsApp, CCTV, RFID/NFC, GPS.",
    "Secure-by-design: role-based access, encryption, and comprehensive audit trails.",
    "Mobile-first parent & teacher apps with multilingual support and offline-friendly features.",
    "Rapid deployment: cloud/on-prem options, training, and change management.",
    "24×7 support, AMC/O&M, and SLA-backed uptime; custom dashboards for management.",
    "Compliance-friendly logs for inspections and safety audits."
  ],

  conclusion: `Transform your campus into a safe, efficient, and connected environment—reduce manual workload, delight parents, and give administrators real-time control with YNG Infra’s School Automation.` 
 },
 {
  slug: "smart-home",
  title: "Smart Home Solutions",
  routeLink: "/business/smart-home",
  icon: "bi bi-house-gear",
  themeClass: "text-warning",

  whyNeeded: `Modern homes juggle comfort, security, and energy costs. Manual control leads to wastage (lights/HVAC left on),
  safety blind spots, and poor visibility into consumption. Smart Home Solutions automate daily routines, enhance safety,
  and cut energy bills—while giving homeowners app and voice control from anywhere.`,

  whatItDoes: `An integrated system that connects lighting, fans, HVAC, curtains/blinds, door locks, video doorbells, CCTV,
  sensors (motion, occupancy, gas, smoke, water leak), appliances, energy meters, solar/backup, and voice assistants.
  It enables scenes, schedules, and condition-based automations, with dashboards for usage insights and alerts.`,

  processFlow: [
    "Site Survey & Requirement Capture – Rooms, loads, security zones, user preferences.",
    "Network & Topology Design – Reliable Wi-Fi + Zigbee/Z-Wave/BLE; optional wired KNX/RS485.",
    "Control Hardware – Smart switches/dimmers/relays, scene controllers, hubs/gateways.",
    "Sensors & Safety – Motion, occupancy, door/window, smoke/gas, water leak, lux, temperature.",
    "Security & Access – Smart locks, video door phones, CCTV/NVR, visitor management.",
    "HVAC & Shades – Thermostats, IR bridges, motorized curtains/blinds with sunrise/sunset logic.",
    "Energy & Utilities – Smart meters, load control, solar/UPS integration, peak-load shedding.",
    "Voice & App – Alexa/Google/Siri integration, user roles, secure remote access.",
    "Automation Programming – Scenes (Good Morning, Away, Movie Night), schedules, geofencing.",
    "Testing, Training & Handover – User onboarding, documentation, and quick-start guides.",
    "AMC & Remote Support – Health monitoring, firmware updates, and SLA-backed service."
  ],

  environmentBenefits: [
    "10–30% potential energy savings via occupancy, schedules, and adaptive dimming.",
    "Peak-load management reduces grid stress and carbon intensity.",
    "Water-leak detection and automated cut-off minimize wastage and damage.",
    "Solar/backup integration prioritizes clean energy and extends battery life.",
    "Longer appliance life through optimized runtimes and soft-start control."
  ],

  industryBenefits: [
    "Comfort & Convenience – One-tap scenes, voice control, and automation of routines.",
    "Safety & Security – Proactive alerts (smoke/gas/leak/intrusion), remote verification via cameras.",
    "Energy Visibility – Real-time metering, bills forecasting, and appliance-level insights.",
    "Property Value – Premium fit-out with modern controls and neat aesthetics.",
    "Low Disruption – Retrofit options preserve existing wiring and switch plates."
  ],

  purpose: [
    "Centralize control of lighting, HVAC, security, and utilities.",
    "Reduce electricity and water costs through automation and insights.",
    "Enhance family safety with intelligent sensing and alerts.",
    "Enable elderly/child-friendly living with routines and voice control.",
    "Future-proof the home with scalable, interoperable tech."
  ],

  industriesNeed: [
    "Apartments & Condominiums",
    "Individual Villas & Bungalows",
    "Gated Communities & Clubhouses",
    "Hotels, Resorts & Serviced Apartments",
    "Premium Rentals & Co-living Spaces",
    "Home Offices & Studio Apartments",
    "Senior-Living & Assisted-Care Homes"
  ],

  yngSpecialityIntro: `YNG Infra delivers vendor-agnostic, scalable smart homes—hybrid wired/wireless designs with local control fallback,
  robust security, and clean aesthetics tailored to Indian power/network conditions.`,

  yngSpecialityPoints: [
    "Retrofit-friendly smart switches and DIN-rail panels—minimal civil work.",
    "Interoperability: Zigbee/Z-Wave/KNX/Wi-Fi; works with Alexa/Google/Siri.",
    "Local-first operation with cloud remote access; privacy and encryption by design.",
    "Professional electrical standards: IS/IEC-compliant protection, labeling, and documentation.",
    "Energy dashboards with actionable automations (peak-cut, schedule, occupancy).",
    "Neat UI/UX: scene keypads, engraved plates, and custom mobile dashboards.",
    "End-to-end delivery: design, installation, programming, training, AMC/O&M.",
    "Scalable architecture—start small, expand room-by-room without rewiring."
  ],

  conclusion: `Upgrade to a safer, smarter, and more efficient home. With YNG Infra’s Smart Home Solutions, enjoy effortless control,
  measurable savings, and premium living—today and as your needs evolve.`
 },
 {
  slug: "consultancy",
  title: "Consultancy Services",
  routeLink: "/business/consultancy",
  icon: "bi bi-clipboard-check",
  themeClass: "text-warning",

  whyNeeded: `Projects fail or stall not because of intent, but due to unclear requirements, regulatory hurdles, wrong tech choices,
  and budget/time overruns. Expert consultancy de-risks decisions early, aligns stakeholders, secures approvals, and optimizes CAPEX/OPEX—
  so execution is smooth and outcomes are measurable.`,

  whatItDoes: `End-to-end advisory across environmental compliance, water & wastewater, automation, and infrastructure—covering feasibility/DPR,
  basic & detailed engineering, tech evaluation, budgeting, statutory approvals, tendering, vendor management, commissioning support, and audits.`,

  processFlow: [
    "Discovery & Site Assessment – Data capture, loads, constraints, stakeholder goals.",
    "Baseline Studies – Sampling/analysis, utility audits, as-built review, risk register.",
    "Compliance Mapping – CPCB/SPCB norms, ISO 14001/45001, water/storm/sewage by-laws.",
    "Solution Engineering – Alternatives, PFD/P&ID, sizing, layouts, control philosophy.",
    "Tech & Vendor Evaluation – RFP specs, pre-bid clarifications, techno-commercial comparisons.",
    "Costing & ROI – CAPEX/OPEX models, lifecycle cost, payback and sensitivity.",
    "Permits & Liaison – Consent to Establish/Operate, environmental clearances, documentation.",
    "Procurement & Contracts – BOQ, tender docs, bid evaluation, negotiations, award support.",
    "Execution Support – QA/QC plans, site reviews, FAT/SAT, commissioning & performance tests.",
    "Training & Handover – O&M manuals, SOPs, safety plans, AMC/O&M strategy.",
    "Post-Implementation Audits – Performance benchmarking, optimization roadmap."
  ],

  environmentBenefits: [
    "Assured compliance to discharge/emission standards and audit readiness.",
    "Reduced water abstraction via reuse/recycle schemes built into design.",
    "Waste minimization and energy optimization, lowering carbon footprint.",
    "Better sludge/solid-waste handling and safer operations."
  ],

  industryBenefits: [
    "Faster approvals and fewer reworks through correct-first-time engineering.",
    "Optimized CAPEX/OPEX with right-sized technology and competitive tendering.",
    "Schedule certainty with structured PMO, QA/QC, and risk controls.",
    "Vendor neutrality and transparent decision trails for management/board."
  ],

  purpose: [
    "Validate feasibility and select the right technology before investing.",
    "Navigate SPCB/CPCB and local authority approvals without delay.",
    "Standardize specs and contracts across multi-site rollouts.",
    "Upgrade/retrofit legacy plants to meet new compliance or capacity."
  ],

  industriesNeed: [
    "Manufacturing (Auto, FMCG, Metals, Electronics)",
    "Pharma & Biotech",
    "Chemicals & Petrochemicals",
    "Food & Beverage",
    "Hospitals, Campuses & IT Parks",
    "Real Estate & Smart Infrastructure",
    "Textiles & Dyeing",
    "Power & Utilities",
    "Municipal & Urban Local Bodies"
  ],

  yngSpecialityIntro: `YNG Infra brings multidisciplinary expertise—process, environmental, electrical, instrumentation, and automation—
  to deliver practical, compliant, and future-ready designs with clear outcomes.`,

  yngSpecialityPoints: [
    "Evidence-based design: treatability/jar tests, data logging, and digital twins where useful.",
    "Vendor-agnostic specs and balanced scorecards for fair techno-commercial selection.",
    "Strong regulatory liaison: complete filings, formats, and inspection readiness.",
    "PLC/SCADA philosophy, IIoT/OCEMS readiness, and cyber-safe architectures.",
    "Lifecycle focus: low OPEX layouts, energy & chemical optimization, maintainability built-in.",
    "Retrofit specialists: capacity upgrades and compliance fixes without long shutdowns.",
    "Structured PMO with milestones, DPRs, and management dashboards."
  ],

  conclusion: `From feasibility to handover, partner with YNG Infra to de-risk decisions, achieve approvals on time, and build assets that
  perform—compliantly, efficiently, and sustainably—throughout their lifecycle.`
  },
  {
  slug: "modular-houses",
  title: "Preconstructed Modular Houses",
  routeLink: "/business/modular-houses",
  icon: "bi bi-houses",
  themeClass: "text-warning",

  whyNeeded: `Conventional construction faces delays, cost overruns, labor shortages, and inconsistent quality—especially in dense cities
  and remote sites. Modular buildings deliver speed, predictability, and factory-grade quality with lower site disruption and
  a smaller carbon footprint. They’re ideal for rapid deployment, scalable growth, and smart, energy-efficient living.`,

  whatItDoes: `Modular housing is built off-site in factory conditions as finished volumetric modules (structure + walls + MEP + interiors).
  Modules are transported to site, craned into place, locked structurally, and connected to utilities. Designs range from studios
  and villas to classrooms, clinics, offices, resorts—fully “smart-home ready” with integrated IoT and energy options.`,

  processFlow: [
    "Needs Assessment & Permits – Site survey, by-laws, fire/NBC compliance, and approvals strategy.",
    "Concept & Engineering – Floor plans, elevations, structural checks (wind/seismic), MEP layout, and finishes.",
    "Factory Fabrication – Steel/LGS/CFS framing, wall/floor/roof panels, insulation, windows/doors, first-fix MEP.",
    "Quality Control – Dimensional checks, leak tests, electrical/pressure tests, finishing QA.",
    "Foundations & Site Prep – Plinth/pile/raft, anchor bolts, drainage, and utility sleeves.",
    "Transport & Cranage – Route planning, escorts, lift plans, and staging.",
    "On-Site Assembly – Module placement, inter-module connections, weather sealing.",
    "Utilities Hook-Up – Electrical, plumbing, HVAC, networking; smart devices commissioning.",
    "Finishing & Snag Clearance – Fixtures, cabinetry, painting, flooring, and site works.",
    "Handover & Documentation – As-builts, O&M manuals, warranty; AMC/O&M onboarding."
  ],

  environmentBenefits: [
    "Up to 80–90% factory fabrication reduces site waste, dust, and noise.",
    "Optimized material use lowers embodied carbon; modules are reusable/relocatable.",
    "High-performance insulation and airtightness cut HVAC loads.",
    "Solar-ready roofs, rainwater harvesting, and greywater reuse options.",
    "Less site traffic reduces emissions and community disturbance."
  ],

  industryBenefits: [
    "Fast Time-to-Occupy – Parallel factory/site work compresses schedules by 30–60%.",
    "Predictable Cost & Quality – Controlled production and repeatable QA.",
    "Scalable & Flexible – Add/remove modules as needs evolve; relocate if required.",
    "Minimal Site Disruption – Smaller crews and cleaner sites, ideal for operating campuses.",
    "Integrated Smart & MEP – Plug-and-play utilities and automation lower lifecycle cost."
  ],

  purpose: [
    "Rapid residential units (studios, villas, staff housing, farm stays).",
    "Education & Healthcare (classrooms, labs, hostels, clinics, PHCs).",
    "Hospitality & Retail (resorts, cabins, cafés, pop-ups).",
    "Corporate/Industrial (site offices, canteens, control rooms).",
    "Disaster Relief & Remote Camps (defense, mining, infra projects)."
  ],

  industriesNeed: [
    "Real Estate Developers & Gated Communities",
    "Education Campuses & Training Centers",
    "Hospitals, Clinics & Wellness Resorts",
    "Hospitality, Tourism & Agro-tourism",
    "Industrial Parks & Construction Sites",
    "Disaster Response & Government Housing",
    "Retail & Experience Centers",
    "Defense, Mining & Remote Operations"
  ],

  yngSpecialityIntro: `YNG Infra delivers turnkey modular buildings—structure, MEP, interiors, and smart automation—engineered for Indian
  climates and codes, with rapid deployment and assured quality.`,

  yngSpecialityPoints: [
    "Multiple systems: Light-Gauge Steel (LGS/CFS), PEB, hybrid steel + SIPs, and container-based modules.",
    "Thermal/acoustic envelopes: rockwool/PIR/XPS, low-E glazing, cool roofs, and acoustic detailing.",
    "Smart-home bundles: lighting/HVAC/locks/CCTV, energy meters, water-leak and gas sensors, app/voice control.",
    "Green options: solar PV/inverters, rainwater harvesting, low-flow fixtures, greywater reuse integration.",
    "Factory-built bathrooms/kitchens for speed and fit-finish; modular furniture packages.",
    "Code & compliance: NBC, fire norms, seismic/wind checks; vetted electrical/plumbing standards.",
    "Logistics & cranage planning for tight urban or remote access sites.",
    "AMC/O&M, remote monitoring, and performance SLAs; upgrade paths for expansion."
  ],

  conclusion: `Build faster and smarter with YNG Infra’s Preconstructed Modular Houses—premium finishes, integrated automation,
  and sustainable performance, delivered on time and ready to live or work in from day one.`
},
{
  slug: "turnkey-installation",
  title: "Turnkey Installation Services",
  routeLink: "/business/turnkey-installation",
  icon: "bi bi-tools",
  themeClass: "text-warning",

  whyNeeded: `Projects often slip on schedule and budget due to multi-vendor handoffs, unclear scope, and site coordination gaps.
  Turnkey delivery gives a single point of responsibility for design, procurement, installation, automation, testing, and handover—
  reducing risk, compressing timelines, and assuring quality, safety, and compliance.`,

  whatItDoes: `End-to-end EPC/EPCM execution of water & wastewater plants (STP/ETP/WTP), environmental systems, automation,
  and smart infrastructure. We handle basic/detailed engineering, civil & structural works, MEP, instrumentation & control,
  PLC/SCADA, FAT/SAT, statutory clearances, documentation, training, and O&M onboarding.`,

  processFlow: [
    "Requirement Capture & Site Survey – Loads, utilities, constraints, stakeholder goals.",
    "Engineering – PFD/P&ID, GA/layouts, cable routing, hook-up drawings, BOQs, control philosophy.",
    "Project Planning – WBS, schedule, traffic & cranage plans, HSE (HIRA/JSA), QA/QC plans.",
    "Procurement – Vendor pre-qualification, RFQs, techno-commercial evaluation, expediting, inspections.",
    "Factory Build & FAT – Skid fabrication, panel building, software staging, functional tests.",
    "Civil & Structural Works – Foundations, plinths, trenches, pipe racks, supports.",
    "Mechanical Installation – Equipment erection, piping, valves, flushing & hydrotests.",
    "Electrical Works – Panels, transformers, cabling, earthing, lighting, protection settings.",
    "Instrumentation & Automation – Field instruments, marshaling, PLC/SCADA configuration, loop checks.",
    "Pre-commissioning – Dry runs, interlocks, cause-&-effect, I/O validation, punch-list closure.",
    "Wet Commissioning & Performance Tests – Trial runs, optimization, performance guarantee tests.",
    "Training, Handover & Documentation – SOPs, O&M manuals, as-builts, spares, warranties, AMC kickoff."
  ],

  environmentBenefits: [
    "Right-sized, energy-efficient equipment reduces long-term power and chemical use.",
    "Less rework and scrap through controlled QA/QC and prefabrication.",
    "Compliance-first execution minimizes emissions/discharge risks and penalties.",
    "Waste segregation and HSE practices improve site environmental performance."
  ],

  industryBenefits: [
    "Single-window accountability with clear KPIs and guaranteed outcomes.",
    "Predictable schedule and cost through detailed planning and change control.",
    "Higher reliability via standardized QA/QC, FAT/SAT, and documentation.",
    "Faster ramp-up to design capacity with trained staff and O&M readiness."
  ],

  purpose: [
    "Deliver projects on time and within budget with a single responsible partner.",
    "De-risk complex multi-discipline coordination across civil, MEP, and automation.",
    "Achieve statutory compliance and pass audits from day one.",
    "Ensure performance guarantees on flow, quality, efficiency, and uptime."
  ],

  industriesNeed: [
    "Water & Wastewater (STP/ETP/WTP)",
    "Pharma & Biotech",
    "Food & Beverage",
    "Chemicals & Petrochemicals",
    "Automotive & General Manufacturing",
    "Power & Utilities",
    "Hospitals, Campuses & IT Parks",
    "Municipal & Smart Infrastructure"
  ],

  yngSpecialityIntro: `YNG Infra executes turnkey projects with in-house process, electrical, and instrumentation teams—combining
  prefabricated skids, robust automation, and disciplined project controls for faster, safer delivery.`,

  yngSpecialityPoints: [
    "Vendor-agnostic tech selection with lifecycle (CAPEX/OPEX) optimization.",
    "3D modeling/BIM, clash detection, and cable/pipe routing for buildability.",
    "HAZOP/HIRA, method statements, and strict PTW safety systems.",
    "Prefabricated skids and standardized panels to reduce site time.",
    "PLC/SCADA with remote monitoring, reports, alarms, and historian.",
    "Rigorous QA/QC: ITPs, WPS/PQR where needed, calibrated tools, test packs.",
    "Transparent governance: progress dashboards, RFI/RFC workflows, change management.",
    "AMC/O&M options with SLAs, spares strategy, and continuous optimization support."
  ],

  conclusion: `Choose YNG Infra as your turnkey partner to accelerate execution, control risk, and achieve assured performance—
  from the first drawing to stable, compliant operations on site.`
 },
 {
  slug: "environmental-solutions",
  title: "Environmental Solutions & Instrumentation",
  routeLink: "/business/environmental-solutions",
  icon: "bi bi-globe2",
  themeClass: "text-warning",

  whyNeeded: `Regulatory norms and ESG goals demand continuous, reliable measurement of water and air quality. Without accurate instruments,
  plants risk non-compliance, unsafe conditions, energy waste, and product quality issues. A robust instrumentation layer
  gives real-time visibility, faster decisions, and proof of compliance.`,

  whatItDoes: `Supply, integrate, and maintain engineering instruments and monitoring systems—flow, pressure, temperature transmitters;
  online water quality monitoring (pH, ORP, DO, turbidity, conductivity, TDS, ammonia, nitrate, chlorine);
  ambient/stack air quality monitoring (PM2.5/PM10, NOx, SO2, O3, CO, CO2, VOCs);
  fixed/portable gas detectors (CH4, H2S, NH3, LPG, Cl2, CO, CO2)—
  with data logging, dashboards, alarms, and reporting (OCEMS/CAAQMS ready).`,

  processFlow: [
    "Requirement Study & Site Survey – Loads, media, ranges, process conditions, hazardous areas.",
    "Instrument Selection & Spec – Technology fit (mag/ultrasonic/vortex for flow; DP/absolute for pressure; RTD/TC for temperature), materials, IP/EX ratings.",
    "Sampling & Installation Design – Tapping, impulse lines, probe lengths, sample conditioning, enclosures, cabling.",
    "Panel/Skid Build & FAT – Analyzer shelters, SS/FRP panels, purge systems; factory acceptance tests.",
    "Installation & Commissioning – Mounting, routing, loop checks, calibration, baseline creation.",
    "Integration – PLC/SCADA/IIoT (4–20 mA, HART, Modbus, Profibus), dashboards, reports, alarms/SOPs.",
    "Validation & Training – Method validation, documentation, operator training.",
    "AMC/O&M – Preventive maintenance, recalibration, spares, remote support."
  ],

  environmentBenefits: [
    "Early leak/emission detection prevents spills and air pollution.",
    "Optimized dosing/aeration reduces chemical and energy use.",
    "Continuous evidence for compliance reduces environmental risk.",
    "Better process control protects receiving water bodies and communities."
  ],

  industryBenefits: [
    "Compliance assurance with auditable data and automated reports.",
    "Higher uptime and product consistency from stable measurements.",
    "Lower OPEX via right-sized control and preventive maintenance.",
    "Improved safety with real-time gas detection and interlocks."
  ],

  purpose: [
    "Achieve real-time visibility of critical water and air parameters.",
    "Meet statutory reporting (continuous monitoring) and ESG targets.",
    "Standardize measurement across sites for comparable KPIs.",
    "Reduce risk from leaks, over-dosing, and off-spec discharge."
  ],

  industriesNeed: [
    "STP/ETP/WTP & Utilities",
    "Pharma & Biotech",
    "Food & Beverage",
    "Chemicals & Petrochemicals",
    "Oil & Gas & Refineries",
    "Power & Boilers/Cooling Towers",
    "Metals, Cement & Mining",
    "Pulp & Paper",
    "Electronics & Precision Mfg.",
    "Hospitals, Campuses & Smart Cities"
  ],

  yngSpecialityIntro: `YNG Infra delivers end-to-end environmental instrumentation—application engineering, certified hardware,
  integration, and lifecycle services—so data is reliable, actionable, and audit-ready.`,

  yngSpecialityPoints: [
    "Broad portfolio: flow (mag/ultrasonic/vortex), pressure (gauge/DP), temperature (RTD/TC + transmitters).",
    "Online water quality analyzers (pH, ORP, DO, turbidity, conductivity/TDS, ammonia, nitrate, chlorine).",
    "Air quality systems: ambient/stack (PM2.5/PM10, NOx, SO2, O3, CO, CO2, VOC) with OCEMS/CAAQMS readiness.",
    "Gas detection (fixed/portable) for CH4, H2S, NH3, LPG, Cl2, CO, CO2 with alarm/interlock logic.",
    "Hazard-area compliance (ATEX/IECEx), IP65/68, hygienic and corrosion-resistant builds.",
    "Calibration & traceability, method validation, and documentation for audits.",
    "SCADA/IIoT dashboards, reports, SMS/e-mail alerts; 4G/NB-IoT/LoRaWAN telemetry.",
    "Analyzer shelters, sample conditioning systems, SS/FRP panels—turnkey delivery.",
    "AMC/O&M with spares strategy, SLAs, and remote health monitoring."
  ],

  conclusion: `Measure what matters. With YNG Infra’s Environmental Solutions, you get accurate instruments, seamless integration,
  and dependable data—keeping your operations compliant, efficient, and safe.`
},
{
  slug: "calibration-services",
  title: "Calibration Services",
  routeLink: "/business/calibration-services",
  icon: "bi bi-speedometer2",
  themeClass: "text-primary",

  whyNeeded: `Accurate measurements are essential for maintaining quality, safety, and regulatory compliance across every
  industry. Over time, instruments lose accuracy due to wear, environmental conditions, and usage stress. Without calibration,
  equipment can produce incorrect readings — leading to production errors, safety hazards, product rejection, and financial
  losses. Calibration ensures that every instrument performs exactly as intended, maintaining trust and reliability in
  critical operations.`,

  whatItDoes: `Calibration compares the readings of an instrument against a certified standard under controlled conditions.
  The process identifies deviations, adjusts the instrument when possible, and issues a calibration certificate showing
  measurement accuracy. This ensures all tools and equipment deliver precise and reliable results, meeting industry
  standards and regulatory requirements.`,

  processFlow: [
    "Inspection – Visual check of instrument condition and environmental suitability.",
    "Pre-Calibration Reading – Measuring current instrument performance before adjustments.",
    "Reference Comparison – Comparing readings against a standard traceable to NABL/ISO/International bodies.",
    "Adjustment & Fine-Tuning – Correcting deviations to bring performance within acceptable tolerance.",
    "Performance Verification – Re-testing to confirm accuracy after adjustments.",
    "Calibration Certificate Issuance – Providing detailed accuracy data, traceability, and validity period."
  ],

  environmentBenefits: [
    "Waste Reduction – Prevents material waste caused by inaccurate measurements.",
    "Energy Efficiency – Optimizes processes such as motors, pumps, and HVAC systems.",
    "Extended Equipment Life – Keeps machines running efficiently, reducing breakdowns.",
    "Sustainable Practices – Supports quality systems that promote responsible and safe operations."
  ],

  industryBenefits: [
    "Quality Assurance – Guarantees measurement accuracy for production, testing, and inspections.",
    "Regulatory Compliance – Meets ISO, NABL, and customer audit requirements.",
    "Cost Reduction – Prevents losses from rework, product rejection, or machine failure.",
    "Operational Reliability – Ensures instruments are safe, stable, and consistent.",
    "Customer Confidence – Boosts credibility with documented accuracy and traceability."
  ],

  purpose: [
    "Ensures measurement accuracy for critical equipment.",
    "Meets industry and international certification requirements (ISO, NABL, OEM).",
    "Improves process control and product quality.",
    "Protects equipment, users, and operations from faulty readings.",
    "Prevents downtime by maintaining reliable tools."
  ],

  industriesNeed: [
    "Manufacturing & Production Plants",
    "Automotive & Aerospace",
    "Pharma, Biotech & Healthcare",
    "Food & Beverage Industries",
    "Construction & Heavy Machinery",
    "Oil & Gas / Petrochemical",
    "Educational Labs & Research Centers",
    "Testing Laboratories & Quality Control Units"
  ],

  yngSpecialityIntro: `At YNG Infra, we offer precision calibration services backed by certified standards, advanced
  technology, and expert technicians. Our solutions ensure your instruments deliver accurate, reliable, and repeatable
  measurements every time.`,

  yngSpecialityPoints: [
    "NABL-Traceable Calibration – Ensuring global-standard accuracy and documentation.",
    "Wide Instrument Coverage – Electrical, mechanical, thermal, dimensional, and pressure instruments.",
    "On-Site & In-Lab Calibration – Flexible service modes based on customer convenience.",
    "Fast Turnaround Time – Minimizing downtime and productivity loss.",
    "Digital Certificates – Secure, traceable documentation for audits and compliance.",
    "Annual Maintenance & Reminder System – Ensuring timely re-calibration for all equipment."
  ],

  conclusion: `With YNG Infra, you gain a trusted calibration partner committed to precision, reliability, and
  compliance. Our services ensure your instruments perform flawlessly, reduce operational risks, and strengthen your
  quality systems.`  
}


];

// src/context/MechanicalCalibrationContext.js
const mechanicalCalibrationSections = [
  {
    heading: "Why Choose YNG Infra for Mechanical Calibration Services?",
    type: "highlight-paragraph", // paragraph + important highlights
    content: [
      "At YNG Infra, we provide specialized mechanical calibration services for a wide range of instruments, including micrometers, vernier calipers, dial gauges, torque wrenches, and more. Our ISO-compliant processes ensure traceability to national and international standards, guaranteeing measurement confidence and reliability.",
      "Backed by advanced equipment and skilled technicians, we deliver quick turnarounds without compromising quality. Enhance the performance and longevity of your tools while meeting regulatory requirements. Partner with us for dependable calibration services tailored to your industry needs.",
    ]
  },

  {
    heading: "Our Mechanical Calibration Facilities",
    type: "boxed-list", // 5 boxes per row
    list: [
      "Dimension",
      "Precision",
      "Torque and RPM",
      "Torque & RPM Calibration",
      "Mass and Volume",
      "Sound Level Meters",
      "Vernier Calipers, Micrometers, Height Gauges, Leg Calipers, Plunger & Lever Dials",
      "Bore Gauges, Plug Gauges, Feeler Gauges, Pitch Gauges, Pressure Gauges, Vacuum Gauges, Radius Gauges",
      "Coating Thickness Gauges, Taper Gauges, Thread Ring Gauges, Thread Plug Gauges, Plain Ring Gauges, Plain Plug Gauges",
      "Roughness Specimens",
      "Steel Scales, Measuring Tapes, Pie Tape",
      "Profile Projector, Video Measuring System, 2D Height Measuring System",
      "Pressure Gauges, Pressure Transmitters, Pressure Switches, Pressure Indicators, Vacuum Gauges, Compound Gauges",
      "Vernier Calipers, Magnetic V-Blocks, Granite Surface Plate, Electronic Level, Spirit Level, Inclinometer, Micrometers, Height Gauges, Leg Calipers, Plunger & Lever Dials",
      "Radius Gauges, Pitch Gauges, Bevel Protractor, Combination Sets, Test Sieves, Special and Inspection Gauges",
    ]
  },

  {
    heading: "Our Process",
    type: "process-highlight", // each step highlighted
    list: [
      "Initial Assessment: We evaluate your equipment to determine the appropriate calibration procedures.",
      "Verification: Our team performs in-depth testing to verify the performance of all systems.",
      "Adjustments and Repairs: If necessary, we make adjustments or repairs to ensure optimal functionality.",
      "Certification: Once calibrated, your equipment is certified to meet industry standards.",
    ]
  },

  {
    heading: "Key Benefits of YNG Infra Mechanical Calibration Services",
    type: "benefits-slider", // slider type
    slides: [
      {
        text: "High precision and traceability – Our calibration processes are traceable to national and international standards, ensuring the highest level of accuracy.",
        image: "/assets/mechanical/precision.png"
      },
      {
        text: "Quick Service Turnaround – We deliver fast and efficient calibration services without compromising quality.",
        image: "/assets/mechanical/turnaround.png"
      },
      {
        text: "Comprehensive calibration reports – Detailed documentation for every calibration, ensuring compliance and peace of mind.",
        image: "/assets/mechanical/reports.png"
      }
    ]
  },

  {
    heading: "Applications of Mechanical Calibration Services",
    type: "card-grid", // 5 cards in a row
    list: [
      "Micrometers – Used for precise dimensional measurements in manufacturing and engineering.",
      "Vernier Calipers – Essential for measuring internal and external dimensions.",
      "Dial Gauges – Used to measure small linear distances in mechanical systems.",
      "Torque Wrenches – Ensuring accurate torque application in automotive and industrial applications.",
      "Pressure Gauges – Used to measure pressure in various industrial processes.",
      "Coating Thickness Gauges – Essential for measuring coating thickness in manufacturing.",
      "Thread Gauges – Used to verify the accuracy of threaded components.",
      "Granite Surface Plates – Ensuring flatness and level measurements in precision engineering.",
      "Test Sieves – Used to measure particle size in material testing.",
    ]
  },

  {
    heading: "Why Regular Calibration is Essential",
    type: "paragraph",
    content: [
      "Regular calibration ensures that your instruments remain accurate and reliable over time. Without proper calibration, equipment can drift, leading to inaccurate measurements, increased downtime, and non-compliance with industry standards. By choosing YNG Infra for your calibration needs, you can avoid these issues and ensure long-term reliability.",
    ]
  },

  {
    heading: "NABL Scope and Compliance",
    type: "paragraph",
    content: [
      "Our mechanical calibration services comply with NABL (National Accreditation Board for Testing and Calibration Laboratories) standards, ensuring the highest level of accuracy and reliability. We provide detailed documentation for every calibration, giving you peace of mind and ensuring compliance with industry regulations.",
    ]
  },
];

export const mechanicalCalibrationData = {
  category: "mechanical-calibration",
  title: "Mechanical Calibration Services – Precision You Can Trust",
  sections: mechanicalCalibrationSections,
  callToAction: {
    title: "Ready to Ensure Precision and Reliability?",
    description:
      "At YNG Infra, we’re committed to delivering precision, reliability, and compliance in every service we offer. Whether you need calibration for a single instrument or an entire fleet, our team is here to help.",
    buttonText: "Get In Touch!",
  }
};





// 3. Provider component
export const CheckoutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  

  return (
    <CheckoutContext.Provider value={{ businessDetails, businesses,ProductDetails, selectedProduct, setSelectedProduct, products, cartItems, setCartItems, shippingAddress, setShippingAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};
