import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/auth";

const API_URL = "http://localhost:8080/api";

// мок авторизация
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username === "admin" && data.password === "1234") {
        resolve({
          token: "mock-jwt-token-123",
        });
      } else {
        reject(new Error("Неверные учетные данные"));
      }
    }, 1000); // симулируем задержку
  });
};

// export const login = async (data: LoginRequest): Promise<LoginResponse> => {
//   const response = await axios.post(`${API_URL}/auth/login`, data);
//   return response.data;
// };