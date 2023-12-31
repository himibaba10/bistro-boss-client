import axios from "axios";

export const axiosFood = axios.create({
  baseURL: "http://localhost:5000",
});
