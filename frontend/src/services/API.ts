import axios from "axios";

const API_BASE_URL = "http://localhost:9001";
export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
