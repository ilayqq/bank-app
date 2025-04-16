import { CardData } from "../types/Card";

export const getCards = async (): Promise<CardData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          cardNumber: "1234 5678 9012 3456",
          holderName: "JOHN DOE",
          expiry: "12/25",
          type: "DEBIT",
          bankName: "O Bank",
        },
      ]);
    }, 500); // симуляция задержки
  });
};
