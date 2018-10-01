import { OrderModel, CourierModel, TakeModel } from ".";
import {FavoriteAddressModel} from "./favorite.address.model";
import {AddressModel} from "./address.model";
import {TransactionStatusModel} from "./transaction.status.model";

export class TransactionModel {
    public id: number;
    public nextId: number;
    public next: TransactionModel;
    public takeId: number;
    public take: TakeModel;
    public courierId: number;
    public courier: CourierModel;
    public orderId: number;
    public order: OrderModel;
    public status: TransactionStatusModel;
    public from: AddressModel;
    public fromId: number;
    public toId: number;
    public to: AddressModel;




}

