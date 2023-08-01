import { Redirect } from 'react-router-dom';
import React, { lazy } from 'react';

// const DashBoard = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import('containers/dashboard/index')), 300);
//   });
// });

// const DashBoard = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import('containers/dashboard/index')), 300);
//   });
// });
const DashBoard = React.lazy(() => {
  return Promise.all([
    import('containers/dashboard/index'),
    new Promise((resolve) => setTimeout(resolve, 0)),
  ]).then(([moduleExports]) => moduleExports);
});

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
