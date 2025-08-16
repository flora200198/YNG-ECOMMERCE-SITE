import axios from "axios";

const API = axios.create({
  // baseURL: "https://yng-ecommerce-site.onrender.com/api",
  baseURL: "http://localhost:10000/api", // use this for local development
  headers: { "Content-Type": "application/json" },
  // withCredentials: true, // enable if you use cookies/sessions
});

// POSTs
export const postContactForm = (formData) => API.post("/contact", formData);
export const postJoinForm    = (formData) => API.post("/join", formData);
export const postGetquoteForm = (formData) => API.post("/get-quote", formData);

// // GETs (make sure these routes exist on backend)
// export const getApplyForms = () => API.get("/products");      // change if incorrect
// export const getEnquiriesFromAPI = () => API.get("/enquiries"); // preferred over localStorage

// // Temporary localStorage fallbacks (if you still want them)
// export const getEnquiries = () =>
//   Promise.resolve(JSON.parse(localStorage.getItem("enquiries") || "[]"));
// export const getApplications = () =>
//   Promise.resolve(JSON.parse(localStorage.getItem("applications") || "[]"));
