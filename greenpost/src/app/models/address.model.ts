import {TransactionModel} from "./transaction.model";
import {FavoriteAddressModel} from "./favorite.address.model";

export class AddressModel {
    public description: string;
    public latitude: number;
    public longitude : number;
    public fromTransactions  : TransactionModel [];
    public toTransactions  : TransactionModel [];
    public favoriteAddresses: FavoriteAddressModel[];
}