export interface CardData {
    id: number;
    cardNumber: string;
    holderName: string;
    expiry: string;
    type: "DEBIT" | "CREDIT";
    bankName: string;
    account: {
        id: number;
        type: string;
        balance: number;
    }
}