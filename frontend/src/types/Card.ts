export interface CardData {
    id: number;
    cardNumber: string;
    holderName: string;
    expiryDate: string;
    account: {
        id: number;
        type: string;
        balance: number;
    }
}