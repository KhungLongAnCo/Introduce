import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { store } from './store';
import AppLayout from './layout/app.layout';
import { history } from './helpers/history';

import 'antd/dist/antd.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          <Route path={'/'} component={AppLayout} />
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
