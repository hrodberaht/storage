import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from '../orders-data.service';
import { Observable, Subject } from 'rxjs';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders$: Observable<Order[]>;
  searchTerm;
  filteredOrders: any;
  constructor(private ordersData: OrdersDataService) { }

  ngOnInit() {
    this.filteredOrders = [];
    this.orders$ = this.ordersData.getOrders();
    this.searchTerm = new Subject();
    this.searchTerm.subscribe((x) => {
      this.ordersData.getOrderById(x.value)
        .subscribe(x => {
          this.filteredOrders = x
          console.log(this.filteredOrders)
        });

    })
  }

  search(searchTerm) {
    this.searchTerm.next(searchTerm);
  }
}
