import { combineReducers, ReducersMapObject } from 'redux';
import { ActionType } from 'typesafe-actions';
import orderReducer from './orders/orders.reducer';
import { StoreState } from '../models/store';

const rootReducer: ReducersMapObject<
  StoreState,
  ActionType<typeof import('../store/action').default>
> = {
  orders: orderReducer,
};

export default combineReducers(rootReducer);
