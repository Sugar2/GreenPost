import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import {CourierModel, OrderModel, TakeModel, TransactionModel} from "../models";

@Injectable()
export class QueryService {
    constructor(private http: HttpClient) {}

    get orders() {
        let http = this.http;
        return {
            one(id: number): Observable<OrderModel> {

                return Observable.forkJoin(
                    http.get('assets/json/orders.json')
                        .map(data => (<OrderModel[]>data).filter(o => o.id == id))
                        .take(1),
                    http.get('assets/json/transactions.json')
                        .map(data => (<TransactionModel[]>data).filter((t: TransactionModel) => t.orderId == id))
                )
                    .map((data: any[]) => {
                        let order = <OrderModel>data[0];
                        let transactions = <TransactionModel[]>data[1];
                        order.transactions = transactions;
                        transactions.forEach(t => t.order == order);
                        return order;
                    });
            },

            all(): Observable<OrderModel[]> {
                return http.get('assets/json/orders.json').map(data => {
                    return <OrderModel[]>data;
                });
            }
        };
    }

    get couriers () {
        let http = this.http;
        return {
            one(id:number): Observable<CourierModel> {
                return Observable.forkJoin(
                    http.get('assets/json/couriers.json')
                        .map(data => (<CourierModel[]>data).filter(o => o.id == id))
                        .take(1),
                    http.get('assets/json/transactions.json')
                        .map(data => (<TransactionModel[]>data).filter((t: TransactionModel) => t.courierId == id))
                )
                    .map((data: any[]) => {
                        let courierOrder = <CourierModel>data[0];
                        let transactions = <TransactionModel[]>data[1];
                        courierOrder.transactions = transactions;
                        transactions.forEach(t => t.courier == courierOrder);
                        return courierOrder;
                    });

            },

            all() {

            }
        }
    }

    get transactions () {
        let http = this.http;
        return {
            one(id:number): Observable<CourierModel> {
                return Observable.forkJoin(
                    http.get('assets/json/transactions.json'),
                    http.get('assets/json/orders.json'),
                    http.get('assets/json/couriers.json'),
                    http.get('assets/json/takes.json'))
                    .map((data: any[]) => {let transaction = data[0].filter(t => t.id == id);
                    transaction.order = data[1].filter(o => o.id = transaction.orderId).take(1);
                    transaction.courier = data[2].filter(c => c.id == transaction.courierId).take(1);
                    transaction.take = data[3].filter(t = > t.id == transaction.takeId).take(1);
                    return transaction;
                    })

            },

            all() {

            }
        }

    }


}