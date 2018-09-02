import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from '../orders-data.service';
import { Observable } from 'rxjs';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders$: Observable<Order[]>
  constructor(private ordersData: OrdersDataService) { }

  ngOnInit() {
    this.orders$ = this.ordersData.getOrders();
  }

}
