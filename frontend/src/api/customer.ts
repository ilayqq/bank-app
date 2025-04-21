import axios from "axios";
import { API_URL } from "./auth";
import { CustomerData } from "../types/Customer";

export const getCustomer = async (phoneNumber: string): Promise<CustomerData[]> => {
    try {
        const response = await axios.get<CustomerData[]>(API_URL + `/customers/${phoneNumber}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении клиента", error);
        throw error;
    }
}