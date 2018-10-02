import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { CourierModel, OrderModel, TakeModel, TransactionModel } from "../models";

@Injectable()
export class QueryService {
    constructor(private http: HttpClient) { }

    get orders() {
        let http = this.http;
        return {
            one(id: number): Observable<OrderModel> {
                return Observable.forkJoin(
                    http.get('https://greenpost.azurewebsites.net/query/orders/${id}')
                        .map(data => (<OrderModel[]>data).filter(o => o.id == id))
                        .take(1).map(data => data.length == 1 ? <OrderModel>data[0] : null),
                    http.get('https://greenpost.azurewebsites.net/query/transactions')
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
                return http.get('https://greenpost.azurewebsites.net/query/orders').map(data => {
                    return <OrderModel[]>data;
                });
            }
        };
    }

    get couriers() {
        let http = this.http;
        return {
            one(id: number): Observable<CourierModel> {
                return Observable.forkJoin(
                    http.get('https://greenpost.azurewebsites.net/query/couriers/${id}')
                        .map(data => (<CourierModel[]>data).filter(o => o.id == id))
                        .take(1).map(data => data.length == 1 ? <CourierModel>data[0] : null),
                    http.get('https://greenpost.azurewebsites.net/query/transactions')
                        .map(data => (<TransactionModel[]>data).filter((t: TransactionModel) => t.courierId == id))
                )
                    .map((data: any[]) => {
                        let courier = <CourierModel>data[0];
                        let transactions = <TransactionModel[]>data[1];
                        courier.transactions = transactions;
                        transactions.forEach(t => t.courier == courier);
                        return courier;
                    });

            },
            all(): Observable<CourierModel[]> {
                return http.get('https://greenpost.azurewebsites.net/query/couriers').map(data => {
                    return <CourierModel[]>data;
                });
            }
        }
    }

    get transactions() {
        let http = this.http;
        return {
            one(id: number): Observable<CourierModel> {
                return Observable.forkJoin(
                    http.get('https://greenpost.azurewebsites.net/query/transactions/${id}'),
                    http.get('https://greenpost.azurewebsites.net/query/orders/${id}'),
                    http.get('https://greenpost.azurewebsites.net/query/couriers/${id}'),
                    http.get('https://greenpost.azurewebsites.net/query/takes/${id}'))
                    .map((data: any[]) => {
                        let transaction = data[0].filter(t => t.id == id);
                        transaction.order = data[1].filter(o => o.id = transaction.orderId).take(1).map(data => data.length == 1 ? <OrderModel>data[0] : null);
                        transaction.courier = data[2].filter(c => c.id == transaction.courierId).take(1).map(data => data.length == 1 ? <CourierModel>data[0] : null);
                        transaction.take = data[3].filter(t => t.id == transaction.takeId).take(1).map(data => data.length == 1 ? <TakeModel>data[0] : null);
                        return transaction;
                    });
            },
            all(): Observable<TransactionModel[]> {
                return http.get('https://greenpost.azurewebsites.net/query/transactions').map(data => {
                    return <TransactionModel[]>data;
                });
            }
        }
    }
}