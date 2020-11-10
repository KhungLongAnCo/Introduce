import React, { FC, useCallback, useEffect, useMemo } from 'react';
import Space from 'antd/lib/space';
import Card from 'antd/lib/card';
import Statistic from 'antd/lib/statistic';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import format from 'date-fns/format';
import PageHeader from 'antd/lib/page-header';
import Spin from 'antd/lib/spin';
import Title from 'antd/lib/typography/Title';
import Button from 'antd/lib/button';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import Modal from 'antd/lib/modal';
import {
  cancelOrderAction,
  checkoutOrderAction,
  getOrderDetailAction,
} from '../../store/orders/orders.action';
import { StoreState } from '../../models/store';
import { formatCurrency } from '../../helpers/common.util';
import { OrderStatus } from '../../constants/orders';
import { useLongPolling } from '../../hooks/common';

const OrderDetail: FC = () => {
  const route = useRouteMatch<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    orderDetail,
    cancelSucceeded,
    loading,
    checkoutCompleted,
  } = useSelector((state: StoreState) => state.orders);
  const status = orderDetail?.status;
  const renderLoading = useCallback(() => {
    return (
      <Spin tip="Loading...">
        <Row gutter={10}>
          <Col span={12}>
            <Space direction={'vertical'}>
              <Statistic title="Price" value={0} />
              <Statistic title="Quantity" value={0} />
              <Statistic title="Total Amount" value={0} />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction={'vertical'}>
              <Statistic title="Product Name" value={0} />
              <Statistic title="Product Name" value={0} />
              <Statistic title="Product Name" value={0} />
            </Space>
          </Col>
        </Row>
      </Spin>
    );
  }, []);

  const handleClickCancel = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      Modal.confirm({
        title: 'Do you Want to cancel this order?',
        icon: <ExclamationCircleOutlined />,
        onOk() {
          dispatch(cancelOrderAction.request(route.params.id));
        },
      });
    },
    [dispatch, route.params.id],
  );
  const handleClickCheckout = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      Modal.confirm({
        title: 'Do you Want to pay for this this order?',
        icon: <ExclamationCircleOutlined />,
        onOk() {
          dispatch(checkoutOrderAction.request(route.params.id));
        },
      });
    },
    [dispatch, route.params.id],
  );
  const actionButtons = useMemo(() => {
    switch (status) {
      case OrderStatus.Create: {
        return [
          <Button key={1} type="primary" danger onClick={handleClickCancel}>
            <CloseOutlined /> Cancel this order
          </Button>,
          <Button key={2} type="primary" onClick={handleClickCheckout}>
            Checkout
          </Button>,
        ];
      }
      case OrderStatus.Cancelled: {
        return [];
      }
      case OrderStatus.Confirmed: {
        return [
          <Button key={1} type="primary" danger onClick={handleClickCancel}>
            <CloseOutlined /> Cancel this order
          </Button>,
        ];
      }
    }
    return [];
  }, [handleClickCancel, handleClickCheckout, status]);

  useLongPolling(
    useCallback(
      () =>
        dispatch(
          getOrderDetailAction.request({ id: route.params.id, silent: true }),
        ),
      [dispatch, route.params.id],
    ),
    5000,
  );

  useEffect(() => {
    dispatch(getOrderDetailAction.request({ id: route.params.id }));
  }, [dispatch, route.params.id]);

  useEffect(() => {
    // Effect for refresh order when cancel succeeded
    if (cancelSucceeded) {
      dispatch(getOrderDetailAction.request({ id: route.params.id }));
    }
  }, [cancelSucceeded, dispatch, route.params.id]);
  useEffect(() => {
    // Effect for refresh order when checkout completed
    if (checkoutCompleted) {
      dispatch(getOrderDetailAction.request({ id: route.params.id }));
    }
  }, [checkoutCompleted, dispatch, route.params.id]);
  return (
    <>
      <PageHeader
        onBack={history.goBack}
        title="Detail Order"
        subTitle="5f915cce8d6500001040b0b0"
        extra={actionButtons}
      />
      <Row justify="center">
        <Col flex="0 0 800px">
          <Card>
            {loading || !orderDetail ? (
              renderLoading()
            ) : (
              <Row gutter={10}>
                <Col span={24}>
                  <Title>{orderDetail.productName}</Title>
                </Col>
                <Col span={12}>
                  <Space direction={'vertical'}>
                    <Statistic
                      title="Price"
                      value={formatCurrency(orderDetail.price)}
                    />
                    <Statistic title="Quantity" value={orderDetail.quantity} />
                    <Statistic
                      title="Total Amount"
                      value={formatCurrency(orderDetail.totalAmount)}
                    />
                  </Space>
                </Col>
                <Col span={12}>
                  <Space direction={'vertical'}>
                    <Statistic
                      title="Status"
                      value={orderDetail.status}
                      style={{ textTransform: 'capitalize' }}
                    />
                    <Statistic title="Customer" value={orderDetail.customer} />
                    <Statistic
                      title="Order date"
                      value={format(
                        new Date(orderDetail.createdDate),
                        'MM/dd/yyyy',
                      )}
                    />
                  </Space>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderDetail;
