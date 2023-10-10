import axios from "axios";

export const api = axios.create({
  baseURL: "https://upload-ai-1g12.onrender.com"
})