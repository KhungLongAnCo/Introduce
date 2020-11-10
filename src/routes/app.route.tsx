import { Redirect } from 'react-router-dom';
import React, { lazy } from 'react';

const DashBoard = lazy(() => import('containers/dashboard/index'));
const NotFound = lazy(() => import('containers/404'));

const routes = [
  {
    path: '/',
    exact: false,
    component: DashBoard,
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
  },
];

export default routes;
