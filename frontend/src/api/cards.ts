import axios from "axios";
import { CardData } from "../types/Card";
import { API_URL } from "./auth";

export const getCards = async (): Promise<CardData[]> => {
  try {
    const response = await axios.get<CardData[]>(API_URL + "/cards", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Ошибка при получении карт:", error);
    throw error;
  }
};
