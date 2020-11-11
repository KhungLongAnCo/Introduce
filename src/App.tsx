import React, { FC, useState, Suspense } from 'react';
import { Provider } from 'react-redux';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import Spin from 'antd/lib/spin';
import { store } from 'store';
import { history } from 'helpers/history';
import { GlobalStyles } from 'styles/global';
import { PageMode } from 'constants/common';
import routes from 'routes/app.route';
import Header from 'layout/Header';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';

AOS.init();

const App: FC = () => {
  const [theme, setTheme] = useState(PageMode.Light);
  // The function that toggles between themes
  const toggleTheme = () => {
    setTheme(theme === PageMode.Light ? PageMode.Dark : PageMode.Light);
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === PageMode.Light ? lightTheme : darkTheme}>
        <Suspense
          fallback={
            <div style={{ textAlign: 'center', paddingTop: 100 }}>
              <Spin size="large" />
            </div>
          }
        >
          <Header changePageMode={toggleTheme} theme={theme} />
          <Router>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  path={route.path}
                  key={String(index)}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Router>
          <GlobalStyles />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
