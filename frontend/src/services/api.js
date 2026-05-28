import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-jwva.onrender.com"
});

export default API;