import authorizedRequest from './request/authorizedRequest';
import {
  OrderModel,
  OrderList,
  OrderRequest,
  CreateOrderRequest,
} from '../models/order';

const OrderEndPointPrefix = '/stl4-01-order-service/api/v1/orders';

export function getOrders(params: OrderRequest) {
  return authorizedRequest.get<OrderList, OrderList>(OrderEndPointPrefix, {
    params: { ...params, sort: 'createdDate:-1' },
  });
}

export function createOrder(data: CreateOrderRequest) {
  return authorizedRequest.post<OrderList, OrderList>(
    OrderEndPointPrefix,
    data,
  );
}

export function getDetailOrder(id: string) {
  return authorizedRequest.get<OrderModel, OrderModel>(
    `${OrderEndPointPrefix}/${id}`,
  );
}

export function cancelOrder(id: string) {
  return authorizedRequest.patch<OrderModel, OrderModel>(
    `${OrderEndPointPrefix}/${id}/cancel`,
  );
}

export function payOrder(id: string) {
  return authorizedRequest.post(`${OrderEndPointPrefix}/checkout`, { id });
}
