import { call, put, takeLatest, select } from 'redux-saga/effects';
import message from 'antd/lib/message';
import {
  cancelOrder,
  createOrder,
  getDetailOrder,
  getOrders,
  payOrder,
} from '../../api/orders';
import { OrderList, OrderModel } from '../../models/order';
import {
  cancelOrderAction,
  checkoutOrderAction,
  createOrderAction,
  getOrderAction,
  getOrderDetailAction,
} from './orders.action';
import { getMessageFromError, shallowTrim } from '../../helpers/common.util';
import { history } from '../../helpers/history';
import { StoreState } from '../../models/store';

function* handleGetOrders(action: ReturnType<typeof getOrderAction.request>) {
  try {
    const response: OrderList = yield call(getOrders, action.payload);
    yield put(getOrderAction.success(response));
  } catch (e) {
    message.error(getMessageFromError(e));
    yield put(getOrderAction.failure(getMessageFromError(e)));
  }
}

function* handleCreateOrder(
  action: ReturnType<typeof createOrderAction.request>,
) {
  try {
    const response: OrderModel = yield call(
      createOrder,
      shallowTrim(action.payload),
    );
    yield put(createOrderAction.success(response));
    history.push(`/order/${response._id}`);
  } catch (e) {
    message.error(getMessageFromError(e));
    yield put(createOrderAction.failure(getMessageFromError(e)));
  }
}

function* handleCancelOrder(
  action: ReturnType<typeof cancelOrderAction.request>,
) {
  try {
    const response: OrderModel = yield call(cancelOrder, action.payload);
    yield put(cancelOrderAction.success(response));
    const { page, pageSize } = yield select(
      (state: StoreState) => state.orders.orders,
    );
    yield put(getOrderAction.request({ page, pageSize }));
  } catch (e) {
    message.error(getMessageFromError(e));
    yield put(cancelOrderAction.failure(getMessageFromError(e)));
  }
}

function* handleGetOrderDetail(
  action: ReturnType<typeof getOrderDetailAction.request>,
) {
  try {
    const response: OrderModel = yield call(getDetailOrder, action.payload.id);
    yield put(getOrderDetailAction.success(response));
  } catch (e) {
    message.error(getMessageFromError(e));
    yield put(getOrderDetailAction.failure(getMessageFromError(e)));
  }
}
function* handleCheckoutOrder(
  action: ReturnType<typeof checkoutOrderAction.request>,
) {
  try {
    yield call(payOrder, action.payload);
    yield put(checkoutOrderAction.success());
  } catch (e) {
    message.error(getMessageFromError(e));
    yield put(checkoutOrderAction.failure(getMessageFromError(e)));
  }
}

export default function* orderSaga() {
  yield takeLatest(getOrderAction.request, handleGetOrders);
  yield takeLatest(createOrderAction.request, handleCreateOrder);
  yield takeLatest(cancelOrderAction.request, handleCancelOrder);
  yield takeLatest(getOrderDetailAction.request, handleGetOrderDetail);
  yield takeLatest(checkoutOrderAction.request, handleCheckoutOrder);
}
