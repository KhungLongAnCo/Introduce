import { DataList } from './common';

export interface OrderRequest {
  page?: number;
  pageSize?: number;
  silent?: boolean;
}

export interface OrderDetailRequest {
  id: string;
  silent?: boolean;
}

export interface OrderModel {
  currency: string;
  deleted: boolean;
  status: string;
  _id: string;
  customer: string;
  productName: string;
  price: number;
  quantity: number;
  totalAmount: number;
  createdDate: string;
  updatedDate: string;
}

export type OrderList = DataList<OrderModel>;

export interface OrderStore {
  loading: boolean;
  error: string;
  orders: OrderList;
  creating: boolean;
  createSucceeded: boolean;
  cancelSucceeded: boolean;
  checkoutCompleted: boolean;
  orderDetail?: OrderModel;
}

export interface CreateOrderRequest {
  productName: string;
  price: number;
  quantity: number;
  totalAmount: number;
}
