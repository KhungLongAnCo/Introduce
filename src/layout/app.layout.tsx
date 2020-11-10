import React, { FC, useCallback, useMemo } from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import OrderedListOutlined from '@ant-design/icons/OrderedListOutlined';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import routes from '../routes/app.route';

const { Header, Content, Sider } = Layout;

const AppLayout: FC = () => {
  const location = useLocation();
  const selectedKey = useMemo(() => {
    const pathWithoutFirstSlash = location.pathname.replace('/', '');
    return pathWithoutFirstSlash.split('/');
  }, [location.pathname]);
  const renderRoute = useCallback(() => {
    return routes.map((i) => (
      <Route
        key={i.path}
        exact={i.exact}
        path={i.path}
        component={i.component}
      />
    ));
  }, []);
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectedKeys={selectedKey}>
          <Menu.Item key="order" icon={<OrderedListOutlined />}>
            List Orders
            <Link to={'/order'} />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content
          style={{
            overflow: 'initial',
            padding: '20px 50px',
          }}
        >
          <Switch>{renderRoute()}</Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
