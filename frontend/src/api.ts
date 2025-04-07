import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchUser = async (name: string) => {
  const response = await axios.get(`${API_URL}/customer/${name}`);
  return response.data;
};

export const createUser = async (name: string) => {
  const response = await axios.post(`${API_URL}/customers`, { name });
  return response.data;
};