import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap, map, filter, take } from 'rxjs/operators';

import { Order } from '../shared/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {
  private ordersUrl = 'api/orders';
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      tap(
        () => console.log('fetched data'),
        catchError(() => {
          console.log('error');
          return [];
        })
      )
    );
  }

  getOrderById(id) {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      map(order => {
        return order.filter(serchedOrder => {
          if (serchedOrder.id === id) {
            return order;
          }
        });
      })
    );
  }
}
