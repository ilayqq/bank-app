export interface TopUpRequest {
    cardId: number;
    amount: number;
}

export interface TransferRequest {
    fromCardId: number;
    toCardNumber: string;
    amount: number;
}