import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useCheckout } from "../../Pages/Context/Context";

const GenerateInvoice = () => {
    const { cartItems, addresses, selectedShippingIndex } = useCheckout();
  const input = document.getElementById("invoice");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10);
    pdf.save("invoice.pdf");
  });
  return (
    <div style={{ display: "none" }}>
  <div id="invoice">
    <h2>Invoice</h2>
    <p><strong>Order Summary:</strong></p>
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>{item.title} - Qty: {item.quantity}</li>
      ))}
    </ul>
    <p><strong>Shipping To:</strong> {addresses[selectedShippingIndex]?.name}</p>
  </div>
</div>
  )
};
export default GenerateInvoice;