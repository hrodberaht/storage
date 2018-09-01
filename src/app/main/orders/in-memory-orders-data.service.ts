import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from '../shared/order.model';

export class InMemoryOrdersDataService implements InMemoryDbService {
  createDb() {
    const orders: Order[] = [
      { id: 11, name: 'Mr. Nice', products: [{ ean: 6545675675, quantity: 1, price: 12.00 }], shipType: 'post' },
      { id: 12, name: 'Mr. Nice', products: [{ ean: 42353453453, quantity: 2, price: 12.36 }], shipType: 'inpost' },
      { id: 13, name: 'Mr. Nice', products: [{ ean: 12313321332, quantity: 4, price: 233.33 }], shipType: 'ruch' },
    ];
    return { orders };
  }
}