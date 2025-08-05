import React from 'react';
import { useCheckout } from "../../Pages/Context/Context";

const ProductDetailCard = () => {
  const { selectedProduct, ProductDetails } = useCheckout();

  if (!selectedProduct) 
    return <p className="text-center text-muted mt-4">No product selected.</p>;

  // Find detailed specs matching the selected product name
  const productSpecs = ProductDetails.find(
    (detail) =>
      detail.product_name.toLowerCase().includes(selectedProduct.name.toLowerCase())
  );

  return (
    <div className="container my-4">
      <div className="card shadow-lg p-4">
        <div className="row">
          {/* Product Image Section */}
          <div className="col-md-4 text-center">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="img-fluid rounded mb-3 border" 
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
          </div>

          {/* Product Details Section */}
          <div className="col-md-8">
            <h2 className="mb-2 text-primary">{selectedProduct.name}</h2>
            
            {/* ✅ Display Operation Here */}
            {productSpecs?.operation && (
              <p className="fw-semibold text-secondary mb-3">
                <strong>Operation: </strong>{productSpecs.operation}
              </p>
            )}

            {/* <p className="text-muted">{selectedProduct.description}</p> */}
          </div>
        </div>

        {/* Specifications Table */}
        <div className="mt-4">
          {productSpecs ? (
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Specification</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Fluid Type</td><td>{productSpecs.fluid_type || "NA"}</td></tr>
                  <tr><td>Measurement</td><td>{productSpecs.measurement || "NA"}</td></tr>
                  <tr><td>Accuracy</td><td>{productSpecs.accuracy || "NA"}</td></tr>
                  <tr><td>Diameter</td><td>{productSpecs.diameter || "NA"}</td></tr>
                  <tr><td>Line Size</td><td>{productSpecs.line_size || "NA"}</td></tr>
                  <tr><td>Conductivity</td><td>{productSpecs.measurable_conductivity || "NA"}</td></tr>
                  <tr><td>Electrode Type</td><td>{productSpecs.electrode_type || "NA"}</td></tr>
                  <tr><td>Wiring</td><td>{productSpecs.wiring || "NA"}</td></tr>
                  <tr><td>Protocol</td><td>{productSpecs.communication_protocol || "NA"}</td></tr>
                  <tr><td>Diagnostics</td><td>{productSpecs.diagnostic_function || "NA"}</td></tr>
                  <tr><td>Output</td><td>{productSpecs.output || "NA"}</td></tr>
                  <tr><td>Input</td><td>{productSpecs.input || "NA"}</td></tr>
                  <tr><td>Process Temp</td><td>{productSpecs.process_temperature || "NA"}</td></tr>
                  <tr><td>Operating Temp</td><td>{productSpecs.operating_temperature || "NA"}</td></tr>
                  <tr><td>Material</td><td>{productSpecs.material_type || "NA"}</td></tr>
                  <tr><td>Protection</td><td>{productSpecs.degree_of_protection || "NA"}</td></tr>
                  <tr><td>Power Supply</td><td>{productSpecs.power_supply || "NA"}</td></tr>
                  <tr><td>Housing</td><td>{productSpecs.housing || "NA"}</td></tr>
                  <tr><td>Weight</td><td>{productSpecs.weight || "NA"}</td></tr>
                  <tr><td>Display</td><td>{productSpecs.display || "NA"}</td></tr>
                  <tr><td>Case Material</td><td>{productSpecs.case_material || "NA"}</td></tr>
                  <tr><td>Mounting</td><td>{productSpecs.mounting || "NA"}</td></tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-danger fw-bold mt-3">No detailed specifications found for this product.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
