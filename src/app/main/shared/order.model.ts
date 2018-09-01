import { ProductForOrder } from "./product-for-order.model";

export class Order {
    id: number;
    name: string;
    products: ProductForOrder[];
    shipType: string;
}