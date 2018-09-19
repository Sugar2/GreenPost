import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { filter } from "rxjs/operators/filter";
/*import 'rxjs/add/operator/filter'*/
import {OrderModel, TransactionModel} from "../models";

@Injectable()
export class QueryService {
    constructor(private http: HttpClient) {

    }

    get orders() {
        let http = this.http;
        return {
            one(id: number): Observable<OrderModel> {

                return Observable.forkJoin(
                    http.get('assets/orders.json')
                        .map((data: any) => <OrderModel[]>data)
                        .filter((o: OrderModel) => o.id == id)
                        .take(1),
                    http.get('assets/transactions.json')
                        .map((data: any) => <TransactionModel[]>data)
                        .filter(t => t.orderId == id))
                .map((data: any[]) => {
                    let order = <OrderModel>data[0];
                    let transactions = <TransactionModel[]>data[1];
                    order.transactions = transactions;
                    transactions.forEach(t => t.order == order);
                    return order;
                });
            },

            all(): Observable<OrderModel[]> {
                return this.http.get('assets/orders.json').map(data => {
                    return <OrderModel[]>data;
                });
            }
        };
    }


}
