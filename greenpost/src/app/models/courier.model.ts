import { TransactionModel } from ".";

export class CourierModel {
    public id: number;
    public from: string;
    public to: string;
    public status: string;
    public transactions: TransactionModel[];
}