import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/auth";

export const API_URL = "http://localhost:8080/api";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};