import { createAsyncAction } from 'typesafe-actions';
import {
  CreateOrderRequest,
  OrderDetailRequest,
  OrderList,
  OrderModel,
  OrderRequest,
} from '../../models/order';

export const getOrderAction = createAsyncAction(
  'GET_ORDERS_REQUESTED',
  'GET_ORDERS_SUCCESS',
  'GET_ORDERS_FAILURE',
)<OrderRequest, OrderList, string>();

export const getOrderDetailAction = createAsyncAction(
  'GET_ORDER_DETAIL_REQUESTED',
  'GET_ORDER_DETAIL_SUCCESS',
  'GET_ORDER_DETAIL_FAILURE',
)<OrderDetailRequest, OrderModel, string>();

export const createOrderAction = createAsyncAction(
  'CREATE_ORDERS_REQUESTED',
  'CREATE_ORDERS_SUCCESS',
  'CREATE_ORDERS_FAILURE',
)<CreateOrderRequest, OrderModel, string>();

export const cancelOrderAction = createAsyncAction(
  'CANCEL_ORDERS_REQUESTED',
  'CANCEL_ORDERS_SUCCESS',
  'CANCEL_ORDERS_FAILURE',
)<string, OrderModel, string>();

export const checkoutOrderAction = createAsyncAction(
  'CHECKOUT_ORDERS_REQUESTED',
  'CHECKOUT_ORDERS_SUCCESS',
  'CHECKOUT_ORDERS_FAILURE',
)<string, void, string>();
