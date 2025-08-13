import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
  // withCredentials: true, // enable if you use cookies/sessions
});

// POSTs
export const postContactForm = (data) => API.post("/contact", data);
export const postJoinForm    = (data) => API.post("/join", data);
export const postGetquoteForm = (data) => API.post("/get-quote", data);

// // GETs (make sure these routes exist on backend)
// export const getApplyForms = () => API.get("/products");      // change if incorrect
// export const getEnquiriesFromAPI = () => API.get("/enquiries"); // preferred over localStorage

// // Temporary localStorage fallbacks (if you still want them)
// export const getEnquiries = () =>
//   Promise.resolve(JSON.parse(localStorage.getItem("enquiries") || "[]"));
// export const getApplications = () =>
//   Promise.resolve(JSON.parse(localStorage.getItem("applications") || "[]"));
