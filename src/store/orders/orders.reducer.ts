import { createReducer } from 'typesafe-actions';
import {
  cancelOrderAction,
  checkoutOrderAction,
  createOrderAction,
  getOrderAction,
  getOrderDetailAction,
} from './orders.action';
import { OrderStore } from '../../models/order';

const INITIAL_STATE: OrderStore = {
  orders: {
    data: [],
    page: 1,
    pageSize: 20,
    totalItem: 20,
    totalPage: 1,
  },
  loading: false,
  error: '',
  creating: false,
  createSucceeded: false,
  cancelSucceeded: false,
  checkoutCompleted: false,
  orderDetail: undefined,
};

const orderReducer = createReducer<OrderStore>(INITIAL_STATE)
  .handleAction(getOrderAction.request, (state, action) => {
    return action.payload?.silent
      ? state
      : {
          ...state,
          loading: true,
          error: '',
          createSucceeded: false,
          cancelSucceeded: false,
          checkoutCompleted: false,
        };
  })
  .handleAction(getOrderAction.success, (state, action) => ({
    ...state,
    orders: action.payload,
    loading: false,
    error: '',
  }))
  .handleAction(getOrderAction.failure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }))
  .handleAction(createOrderAction.request, (state) => {
    return {
      ...state,
      creating: true,
      createSucceeded: false,
    };
  })
  .handleAction(createOrderAction.success, (state) => {
    return {
      ...state,
      creating: false,
      createSucceeded: true,
    };
  })
  .handleAction(createOrderAction.failure, (state) => {
    return {
      ...state,
      creating: false,
      createSucceeded: false,
    };
  })
  .handleAction(getOrderDetailAction.request, (state, action) => {
    return action.payload.silent
      ? state
      : {
          ...state,
          loading: true,
          cancelSucceeded: false,
          checkoutCompleted: false,
        };
  })
  .handleAction(getOrderDetailAction.success, (state, action) => {
    return {
      ...state,
      loading: false,
      orderDetail: action.payload,
    };
  })
  .handleAction(getOrderDetailAction.failure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  })
  .handleAction(cancelOrderAction.request, (state) => {
    return {
      ...state,
      loading: true,
      cancelSucceeded: false,
    };
  })
  .handleAction(cancelOrderAction.success, (state, action) => {
    return {
      ...state,
      loading: false,
      orderDetail: action.payload,
      cancelSucceeded: true,
    };
  })
  .handleAction(cancelOrderAction.failure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
      cancelSucceeded: false,
    };
  })
  .handleAction(checkoutOrderAction.request, (state) => {
    return {
      ...state,
      loading: true,
      checkoutCompleted: false,
    };
  })
  .handleAction(checkoutOrderAction.success, (state, action) => {
    return {
      ...state,
      loading: false,
      checkoutCompleted: true,
    };
  })
  .handleAction(checkoutOrderAction.failure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
      checkoutCompleted: true,
    };
  });

export default orderReducer;
