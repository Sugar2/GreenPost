import { OrderModel, CourierModel, TakeModel } from ".";

export class TransactionModel {
    public id: number;
    public from: string;
    public to: string;
    public status: string;
    public nextId: number;
    public next: TransactionModel;
    public orderId: number;
    public order: OrderModel;
    public courierId: number;
    public courier: CourierModel;
    public takeId: number;
    public take: TakeModel;
}