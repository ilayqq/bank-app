import axios from "axios";
import { Transaction } from "../types/transactions";
import { API_URL } from "./auth";

export const getTransactions = async (): Promise<Transaction[]> => {
    try {
        const response = await axios.get<Transaction[]>(API_URL + "/transactions", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Ошибка при получении транзакций:", error);
        throw error;
    }
}