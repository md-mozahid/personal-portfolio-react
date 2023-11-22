import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

export default axiosInstance;
