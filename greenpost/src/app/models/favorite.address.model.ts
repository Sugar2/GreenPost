import {AddressModel} from "./address.model";
import {ClientModel} from "./client.model";

export class FavoriteAddressModel {
    public addressId: number;
    public address: AddressModel;
    public clientId: number;
    public client: ClientModel;
}