import { TransactionModel } from ".";

export class CourierModel {
    public id: number;
    public name: string;
    public status: string;
    public transactions: TransactionModel[];
}