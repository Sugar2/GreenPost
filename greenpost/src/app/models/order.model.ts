import { TransactionModel } from ".";
import {ClientModel} from "./client.model";
import {OrderStatusModel} from "./order.status.model";

export class OrderModel {
    public id: number;
    public clientId: number;
    public client: ClientModel;
    public status: OrderStatusModel;
    public transactions: TransactionModel[];
}
