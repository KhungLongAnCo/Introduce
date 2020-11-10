import { Redirect } from 'react-router-dom';
import React, { lazy } from 'react';
import NotFound from '../containers/404';

const OrderList = lazy(() => import('../containers/order/index'));
const OrderDetail = lazy(() => import('../containers/order/detail'));

const routes = [
  {
    path: '/',
    component() {
      return <Redirect to={'/order'} />;
    },
    exact: true,
  },
  {
    path: '/order/:id',
    component: OrderDetail,
    exact: true,
  },
  {
    path: '/order',
    component: OrderList,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
    exact: true,
  },
];

export default routes;
