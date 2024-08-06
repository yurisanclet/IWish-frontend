import axios from "axios";
import "dotenv";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

export default api;
