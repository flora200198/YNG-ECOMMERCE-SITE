import { useParams } from "react-router-dom";

// data imports
import { calibrationServicesData } from "./data"; 
import { thermalCalibrationData } from "./data";
import { electroTechnicalCalibrationData } from "./data";
import { mechanicalCalibrationData } from "./data";

// component imports
import CalibrationMainPage from "./CalibrationMainPage"
import ThermalCalibrationPage from "./ThermalCalibration"
import ElectroTechnicalPage from "./ElectroTechnicalPage";
import MechanicalCalibrationPage from "./MechanicalCalibration";

export default function CalibrationPage() {
  const { category } = useParams();

  // map categories to components + data
  const pageMap = {
    "calibration-services": {
      component: CalibrationMainPage,
      data: calibrationServicesData,
    },
    "thermal-calibration": {
      component: ThermalCalibrationPage,
      data: thermalCalibrationData,
    },
    "electro-technical-calibration": {
      component: ElectroTechnicalPage,
      data: electroTechnicalCalibrationData,
    },
    "mechanical-calibration": {
      component: MechanicalCalibrationPage,
      data: mechanicalCalibrationData,
    },
  };

  const selected = pageMap[category];

  if (!selected) return <h2 className="text-center mt-5">404 Page Not Found</h2>;

  const Component = selected.component;

  return <Component data={selected.data} />;
}
