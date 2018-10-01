import {FavoriteAddressModel} from "./favorite.address.model";
import {OrderModel} from "./order.model";
import {ClientTypeModel} from "./client.type.model";

export class ClientModel {
    public id: number;
    public shortName: string;
    public fullName: string;
    public code: string;
    public type: ClientTypeModel;
    public favoriteAddresses: FavoriteAddressModel[];
    public orders: OrderModel[];
}