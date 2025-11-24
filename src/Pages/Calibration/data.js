// data.js

// ======================================================
// 1) MAIN CALIBRATION SERVICES (calibrationServicesData)
// ======================================================
export const calibrationServicesData = {
  category: "calibration-services",
  title: "Calibration Services – Precision You Can Trust",
  breadcrumb: "YNG Infra > Calibration Services – Precision You Can Trust",
  intro:
    "At YNG Infra, our Calibration Services ensure that your equipment remains reliable and accurate. Our team provides in-depth calibration to verify the performance of all systems, helping to maintain optimal functioning. With our Calibration Services, you can reduce downtime and increase efficiency, knowing that your equipment is tested to the highest standards.",
  sections: [
    {
      heading: "Our Calibration Services",
      type: "paragraph",
      content: [
        "Equipment Calibration: We verify the performance of all systems, ensuring they meet the highest standards of accuracy and reliability.",
      ],
    },
    {
      heading: "Revitalize Your Instruments with Precision Repairs",
      type: "card",
      content: [
        "Extend the life of your instruments with our cost-effective repair services. We diagnose, repair, and test equipment to ensure optimal functionality. Save on replacements and maintain your workflow with our dependable repair solutions for all major instrument brands.",
      ],
      actionButton: "Get Repair Support",
      image: "/assets/repair.png"
    },
    {
      heading: "Professional Procurement Support for Precision and Performance",
      type: "image-left",
      content: [
        "Trust us to handle your instrument procurement needs with professionalism and precision. We source, negotiate, and deliver instruments that align with your requirements, ensuring optimal performance and cost-efficiency. Experience stress-free procurement with our expert services.",
      ],
      actionButton: "Request Procurement Assistance",
      image: "/assets/Procurement.png"
    },
    {
      heading: "Master Your Calibration Instruments with Our Training Support",
      type: "paragraph",
      content: [
        "Our training support is designed to ensure you fully understand the operation and proper usage of your calibration instruments. We offer hands-on training sessions, user manuals, and video tutorials to guide you through each feature. Our goal is to help you maximize your equipment’s accuracy and efficiency for consistent performance.",
      ],
    },
    // Benefits slider (keeps original content but as slides)
    {
      heading: "Benefits of YNG Infra Calibration Services",
      type: "benefits-slider",
      slides: [
        {
          text: "Reduced Downtime: Keep your operations running smoothly with minimal interruptions.",
          image: "/assets/Productivity.png"
        },
        {
          text: "Increased Efficiency: Ensure your equipment performs at its best, boosting productivity.",
          image: "/assets/Efficiency.png"
        },
        {
          text: "Cost Savings: Extend the life of your instruments and avoid costly replacements.",
          image: "/assets/Saving.png"
        }, 
        {
          text: "Expert Support: Rely on our certified professionals for precision and reliability.",
          image: "/assets/Support.png"
        }
      ]
    }
  ],
  callToAction: {
    title: "Contact Us for Expert Calibration Services",
    description:
      "Get in touch with us today to learn more about our calibration services or to request a quote. Let YNG Infra be your trusted partner for all your calibration needs.",
    buttonText: "Get In Touch!",
  },
};

// ======================================================
// 2) THERMAL CALIBRATION (thermalCalibrationData)
// ======================================================
export const thermalCalibrationData = {
  category: "thermal-calibration",
  title: "Thermal Calibration – Precision Testing for Temperature Accuracy",
  breadcrumb:
    "YNG Infra > Precision Calibration Instruments and Services > Thermal Calibration",
  intro:
    "Keep your thermal instruments at peak performance with professional calibration services. Whether it's furnaces, thermocouples, or data loggers, our expertise ensures compliance and precision. Invest in reliable calibration to protect your process integrity and operational efficiency.",
  sections: [
{
  heading: "Why Choose YNG Infra for Electrotechnical Calibration",
  type: "highlight-paragraph",
  content: [
    "At YNG Infra, we offer expert electrotechnical calibration services to ensure the accuracy and reliability of your electrical and electronic measuring instruments. From multimeters and clamp meters to oscilloscopes and power analyzers, our advanced calibration methods guarantee compliance with national and international standards.",
    "Accurate electrotechnical calibration helps maintain safety, improve efficiency, and ensure consistent performance across your electrical systems and equipment.",
  ],
},
    {
      heading: "Why Choose YNG Infra for Thermal Calibration",
      type: "highlight-paragraph",
      content: [
        "At YNG Infra, we provide professional thermal calibration services to keep your temperature instruments at peak performance. From furnaces and thermocouples to data loggers, our expertise ensures compliance, precision, and operational efficiency.",
        "Invest in reliable calibration to protect your process integrity and maintain superior product quality.",
      ],
    },
    {
      heading: "Why Thermal Calibration Matters",
      type: "paragraph",
      content: [
        "Temperature calibration is an essential practice to ensure the precision and reliability of temperature measurement instruments across various industries. It involves comparing an instrument’s temperature readings to a certified reference standard and making adjustments as needed to achieve accuracy.",
        "Precise temperature measurements are vital for quality assurance, safety, and meeting regulatory requirements, influencing industries such as manufacturing, food production, pharmaceuticals, and HVAC systems.",
        "Routine calibration of temperature sensors and instruments enables businesses to enhance operational efficiency, lower energy usage, and maintain superior product quality.",
        "It helps avoid problems stemming from inaccurate readings, such as substandard products, inefficient processes, and potential safety risks.",
        "Gaining a clear understanding of calibration techniques, the instruments involved, and the importance of proper documentation and traceability is key to upholding consistent measurement accuracy and reliability.",
      ],
    },
    
    {
  heading: "Thermal Calibration Features",
  type: "list",
  list: [
    {
      image: "/assets/thermal/temperature-recorder.png",
      text: "Temperature Recorder / Data Loggers",
    },
    {
      image: "/assets/thermal/temperature-controller.png",
      text: "Temperature Controllers",
    },
    {
      image: "/assets/thermal/hygrometer.png",
      text: "Thermometer / Hygrometer",
    },
    {
      image: "/assets/thermal/environment-chamber.png",
      text: "Environment Chambers (%RH, °C)",
    },
    {
      image: "/assets/thermal/hot-air-oven.png",
      text: "Hot Air Oven",
    },
    {
      image: "/assets/thermal/autoclave.png",
      text: "Auto Claves",
    },
    {
      image: "/assets/thermal/thermocouple.png",
      text: "Thermocouples (-80°C to +1200°C)",
    },
    {
      image: "/assets/thermal/ir-thermometer.png",
      text: "IR Thermometers",
    },
    {
      image: "/assets/thermal/rtd.png",
      text: "RTDs",
    },
  ],
},
    {
      heading: "Why is Thermal Calibration Important?",
      type: "paragraph",
      content: [
        "Temperature calibration is vital for ensuring the precision and dependability of temperature measurements, which are critical for quality assurance, safety, regulatory compliance, and operational efficiency across numerous industries.",
        "Accurate temperature data helps maintain the integrity of processes and products. For example, in the pharmaceutical sector, precise temperature regulation is crucial to ensure the safety and effectiveness of medications. Errors in temperature readings can result in subpar products, leading to financial losses and potential health risks.",
        "In industrial environments, calibrated temperature instruments are key to streamlining operations, reducing energy usage, and enhancing product quality.",
        "Failure to calibrate instruments properly or regularly can lead to inefficient processes, higher energy expenses, and defective products.",
        "Moreover, regulatory agencies often mandate adherence to strict calibration protocols to meet safety and quality standards. Regular calibration ensures compliance, helping businesses avoid legal and regulatory complications.",
      ],
    },
    {
      heading: "How Often Should Thermal Instruments Be Calibrated?",
      type: "paragraph",
      content: [
        "The frequency of temperature instrument calibration depends on several factors, including usage patterns, the critical nature of measurements, manufacturer guidelines, environmental conditions, historical performance, and regulatory demands.",
        "Instruments used frequently or in applications requiring high accuracy typically need more frequent calibration. For example, temperature sensors in pharmaceutical production may require calibration every 3–6 months due to stringent regulations.",
        "Instruments with less critical roles or infrequent use might only need annual calibration.",
        "Environmental factors also influence calibration schedules. Instruments subjected to extreme conditions, such as high temperatures, humidity, or corrosive environments, may need more frequent checks to ensure reliability.",
        "Additionally, historical performance data can guide calibration intervals; instruments prone to significant drift over time might need regular recalibration, while stable instruments may be checked less often.",
        "Establishing a calibration schedule tailored to these factors ensures temperature instruments maintain their accuracy and reliability, supporting optimal performance and compliance.",
      ],
    },
    {
      heading: "Can I Perform Thermal Calibration Myself?",
      type: "paragraph",
      content: [
        "While basic temperature calibration can be handled in-house with appropriate tools and training, professional calibration services are strongly recommended for critical applications, stringent accuracy requirements, and adherence to regulatory standards.",
        "Professionals bring specialized expertise, advanced equipment, and traceability to ensure precise and reliable calibration results.",
        "In-house calibration may suffice for routine checks or non-critical applications. However, for highly accurate measurements or compliance with industry regulations, professional calibration offers greater reliability and assurance.",
        "Services from providers like YNG Infra include on-site and laboratory calibration as well as traceable calibration certificates, ensuring that instruments meet the highest standards of precision and reliability.",
        "Leveraging professional calibration services helps organizations maintain quality control, achieve regulatory compliance, and optimize operational efficiency.",
      ],
    },
    {
      heading: "Our Process",
      type: "process-highlight",
      list: [
        "Initial Assessment: We evaluate your equipment to determine the appropriate calibration procedures.",
        "Testing and Verification: Our team performs in-depth testing to verify the performance of all systems.",
        "Adjustments and Repairs: If necessary, we make adjustments or repairs to ensure optimal functionality.",
        "Certification: Once calibrated, your equipment is certified to meet industry standards.",
      ],
    },
    {
      heading: "Scope of NABL",
      type: "paragraph",
      content: [
        "Our thermal calibration services comply with NABL (National Accreditation Board for Testing and Calibration Laboratories) standards to ensure accuracy and traceability. Detailed documentation supports audit readiness and industry compliance.",
      ],
    },
  ],
  callToAction: {
    title: "Ready to Ensure Precision and Reliability?",
    description:
      "At YNG Infra, we’re committed to delivering precision, reliability, and compliance in every service we offer. Whether you need calibration for a single instrument or an entire fleet, our team is here to help. Get in touch with us today to learn more about our thermal calibration services or to request a quote. Let YNG Infra be your trusted partner for all your calibration needs.",
    buttonText: "Get In Touch!",
  },
};

// ======================================================
// 3) ELECTRO-TECHNICAL CALIBRATION (electroTechnicalCalibrationData)
// ======================================================
export const electroTechnicalCalibrationData = {
  category: "electro-technical-calibration",
  title: "Electro-Technical Calibration – Precision You Can Trust",
  breadcrumb:
    "YNG Infra > Precision Calibration Instruments and Services > Electro-Technical Calibration – Precision You Can Trust",
  intro:
    "At YNG Infra, we provide top-tier calibration solutions for your electrical instruments. Our experts ensure your equipment, such as resistance meters and clamp meters, delivers reliable and accurate results every time. With detailed documentation and compliance with global standards, we offer precision you can count on.",
  sections: [
    {
      heading: "Why Electro-Technical Calibration Matters",
      type: "paragraph",
      content: [
        "Calibration is essential for maintaining the accuracy, reliability, and safety of electrical instruments. Over time, equipment can drift from its original settings, leading to inaccurate measurements and potential operational issues. At YNG Infra, we understand the critical role calibration plays in ensuring optimal performance, which is why we offer comprehensive electro-technical calibration services tailored to your needs.",
      ],
    },
    {
      heading: "Our Process",
      type: "process-highlight",
      list: [
        "Initial Assessment: We evaluate your equipment to determine the appropriate calibration procedures.",
        "Verification: Our team performs in-depth testing to verify the performance of all systems.",
        "Adjustments and Repairs: If necessary, we make adjustments or repairs to ensure optimal functionality.",
        "Certification: Once calibrated, your equipment is certified to meet industry standards.",
      ],
    },
    {
      heading: "Our Electro-Technical Calibration Facilities",
      type: "boxed-list",
      list: [
        "Panel Meters",
        "Digital Multimeters",
        "LCR Meters",
        "Oscilloscopes",
        "Clamp Meters",
        "Temperature Voltmeters/Ammeters",
        "Frequency Counters/Generators",
        "DC/AC Power Supplies",
        "Simulators",
        "Shunts",
        "High Voltage Probes",
        "Power Meters",
        "Power Quality Analyzers",
        "Resistance/Inductance/Capacitance Boxes",
        "Multiplexers",
        "Current Probes",
        "Earth Fault Locators (DC/AC)",
        "Frequency/Watt Meters",
        "Insulation Testers (Meggers)",
        "Current/Potential Transformers",
        "HV Testers (DC/AC)",
      ],
    },
    {
      heading: "Why Regular Calibration is Essential",
      type: "paragraph",
      content: [
        "Regular calibration ensures that your instruments remain accurate and reliable over time. Without proper calibration, equipment can drift, leading to:",
      ],
      list: [
        "Inaccurate Measurements – affecting the quality and safety of your operations.",
        "Increased Downtime – due to equipment failures or frequent repairs.",
        "Non-Compliance – failing to meet industry regulations and standards.",
      ],
      conclusion:
        "By choosing YNG Infra for your calibration needs, you can avoid these issues and ensure the long-term reliability of your equipment.",
    },
    {
      heading: "NABL Scope and Compliance",
      type: "paragraph",
      content: [
        "Our electro-technical calibration services comply with NABL (National Accreditation Board for Testing and Calibration Laboratories) standards, ensuring the highest level of accuracy and reliability. We provide detailed documentation for every calibration, giving you peace of mind and ensuring compliance with industry regulations.",
      ],
    },
  ],
  callToAction: {
    title: "Ready to Ensure Precision and Reliability?",
    description:
      "At YNG Infra, we’re committed to delivering precision, reliability, and compliance in every service we offer. Whether you need calibration for a single instrument or an entire fleet, our team is here to help. Get in touch with us today to learn more about our electro-technical calibration services or to request a quote. Let YNG Infra be your trusted partner for all your calibration needs.",
    buttonText: "Get In Touch!",
  },
};

// ======================================================
// 4) MECHANICAL CALIBRATION (mechanicalCalibrationData)
// ======================================================
export const mechanicalCalibrationData = {
  category: "mechanical-calibration",
  title: "Mechanical Calibration Services – Precision You Can Trust",
  breadcrumb:
    "YNG Infra > Precision Calibration Instruments and Services > Mechanical Calibration Services – Precision You Can Trust",

  intro:
    "At YNG Infra, we provide specialized mechanical calibration services that ensure your instruments remain reliable, compliant, and highly accurate across multiple measurement categories.",

  sections: [
    // -----------------------------------------
    // 1) WHY CHOOSE US → highlight paragraph
    // -----------------------------------------
    {
      heading: "Why Choose YNG Infra for Mechanical Calibration Services?",
      type: "highlight-paragraph",
      content: [
        "At YNG Infra, we provide specialized mechanical calibration services for a wide range of instruments, including micrometers, vernier calipers, dial gauges, torque wrenches, and more. Our ISO-compliant processes ensure traceability to national and international standards, guaranteeing measurement confidence and reliability.",
        "Backed by advanced equipment and skilled technicians, we deliver quick turnarounds without compromising quality. Enhance the performance and longevity of your tools while meeting regulatory requirements. Partner with us for dependable calibration services tailored to your industry needs.",
      ],
    },

    // -----------------------------------------
    // 2) FACILITIES → Boxed list, 5 per row
    // -----------------------------------------
    {
      heading: "Our Mechanical Calibration Facilities",
      type: "boxed-list",
      list: [
  {
    title: "Dimension",
    image: "/assets/Dimension.png",
    description: "Used for dimensional measurements essential in engineering and manufacturing applications."
  },
  {
    title: "Precision",
    image: "/assets/Precision.png",
    description: "High-precision tools designed for highly accurate measurement and calibration tasks."
  },
  {
    title: "Torque and RPM",
    image: "/assets/Torque&RPM.png",
    description: "Instruments used for torque and rotational speed measurements in industrial environments."
  },
  {
    title: "Torque & RPM Calibration",
    image: "/assets/Torque.png",
    description: "Ensures torque tools and RPM measurement devices maintain peak accuracy."
  },
  {
    title: "Mass and Volume",
    image: "/assets/Mass&Volume.png",
    description: "Calibration services for mass, weight, and volumetric measuring instruments."
  },
  {
    title: "Sound Level Meters",
    image: "/assets/SoundLevel.png",
    description: "Used for noise level monitoring in environmental, industrial, and compliance testing."
  },
  {
    title: "Vernier Calipers, Micrometers & Height Gauges",
    image: "/assets/Vernier.png",
    description: "Precision tools for internal, external, and step measurements across industries."
  },
  {
    title: "Bore, Plug, Feeler & Pitch Gauges",
    image: "/assets/mechanical/gauges.png",
    description: "Comprehensive range of gauges for dimensional inspection and tolerance verification."
  },
  {
    title: "Coating Thickness & Thread Gauges",
    image: "/assets/mechanical/coating-thickness.png",
    description: "Ensures accurate coating layers and thread consistency in manufactured components."
  },
  {
    title: "Roughness Specimens",
    image: "/assets/mechanical/roughness.png",
    description: "Reference specimens used to compare and assess surface roughness and finish quality."
  },
  {
    title: "Steel Scales, Measuring Tapes & Pie Tapes",
    image: "/assets/mechanical/scales.png",
    description: "Standard tools for length measurement and circumference checks in industrial applications."
  },
  {
    title: "Profile Projector & Video Measuring System",
    image: "/assets/mechanical/profile-projector.png",
    description: "Advanced measuring equipment for accurate inspection of small and complex components."
  },
  {
    title: "Pressure Gauges & Transmitters",
    image: "/assets/mechanical/pressure-gauge.png",
    description: "Used for calibration of pressure measurement tools across critical applications."
  },
  {
    title: "Granite Surface Plate & Electronic Level",
    image: "/assets/mechanical/granite-plate.png",
    description: "Flat reference systems for precision measurements and instrument alignment."
  },
  {
    title: "Bevel Protractor, Combination Sets & Test Sieves",
    image: "/assets/mechanical/bevel-protractor.png",
    description: "Tools for angle measurement, component inspection, and material particle size evaluation."
  }
],
    },

    {
      heading: "Our Process",
      type: "process-highlight",
      list: [
        "Initial Assessment: We evaluate your equipment to determine the appropriate calibration procedures.",
    "Verification: Our team performs in-depth testing to verify the performance of all systems.",
    "Adjustments and Repairs:If necessary, we make adjustments or repairs to ensure optimal functionality.",
    "Certification: Once calibrated, your equipment is certified to meet industry standards.",
      ],
    },

    // -----------------------------------------
    // 4) BENEFITS → content left / slider right
    // -----------------------------------------
    {
      heading: "Key Benefits of YNG Infra Mechanical Calibration Services",
      type: "benefits-slider",
      slides: [
        {
          text: "High precision and traceability – Our calibration processes are traceable to national and international standards, ensuring the highest level of accuracy.",
          image: "/assets/mechanical/precision.png",
        },
        {
          text: "Quick Service Turnaround – We deliver fast and efficient calibration services without compromising quality.",
          image: "/assets/mechanical/fast-service.png",
        },
        {
          text: "Comprehensive calibration reports – Detailed documentation for every calibration ensures compliance and peace of mind.",
          image: "/assets/mechanical/reports.png",
        },
      ],
    },
    // -----------------------------------------
    // 5) APPLICATIONS → card-grid (5 per row)
    // -----------------------------------------
    {
      heading: "Applications of Mechanical Calibration Services",
      type: "card-grid",
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
      ],
    },
    // -----------------------------------------
    // 6) WHY ESSENTIAL → paragraph
    // -----------------------------------------
    {
      heading: "Why Regular Calibration is Essential",
      type: "paragraph",
      content: [
        "Regular calibration ensures that your instruments remain accurate and reliable over time. Without proper calibration, equipment can drift, leading to inaccurate measurements, increased downtime, and non-compliance with industry standards. By choosing YNG Infra for your calibration needs, you can avoid these issues and ensure long-term reliability.",
      ],
    },

    // -----------------------------------------
    // 7) NABL → paragraph
    // -----------------------------------------
    {
      heading: "NABL Scope and Compliance",
      type: "paragraph",
      content: [
        "Our mechanical calibration services comply with NABL (National Accreditation Board for Testing and Calibration Laboratories) standards, ensuring the highest level of accuracy and reliability. We provide detailed documentation for every calibration, giving you peace of mind and ensuring compliance with industry regulations.",
      ],
    },
  ],

  // -----------------------------------------
  // CALL TO ACTION
  // -----------------------------------------
  callToAction: {
    title: "Ready to Ensure Precision and Reliability?",
    description:
      "At YNG Infra, we’re committed to delivering precision, reliability, and compliance in every service we offer. Whether you need calibration for a single instrument or an entire fleet, our team is here to help.",
    buttonText: "Get In Touch!",
  },
};
