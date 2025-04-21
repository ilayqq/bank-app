import { TopUpRequest, TransferRequest } from "../types/transactions";

export const topUp = async (data: TopUpRequest): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};

export const transfer = async (data: TransferRequest): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};