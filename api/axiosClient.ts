import axios from "axios";

const axiosClient = axios.create({
  baseURL: "hello",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
