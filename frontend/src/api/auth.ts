import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/auth";

export const API_URL = "http://localhost:8080/api";

export function parseJwt(token: string) {
  try {
    const base64Payload = token.split('.')[1];
    const decoded = atob(base64Payload);
    return JSON.parse(decoded);
  } catch (e) {
    console.error("Не удалось декодировать токен", e);
    return null;
  }
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/auth/login`, data);
  return response.data;
};