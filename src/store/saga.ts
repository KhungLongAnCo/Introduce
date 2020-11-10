import { fork, all } from '@redux-saga/core/effects';
import orderSaga from './orders/orders.saga';

export default function* rootSaga() {
  try {
    yield all([fork(orderSaga)]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
