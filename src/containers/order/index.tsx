import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from 'antd/lib/page-header';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import CreateOrderModal, {
  CreateOrderForm,
} from '../../components/orders/CreateOrderModal';
import {
  createOrderAction,
  getOrderAction,
} from '../../store/orders/orders.action';
import { StoreState } from '../../models/store';
import { OrderModel } from '../../models/order';
import { useTableColumn } from '../../hooks/orders';
import { useLongPolling } from '../../hooks/common';

const OrderDetail: FC = () => {
  const dispatch = useDispatch();
  const columns = useTableColumn();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [{ page, pageSize }, setPagination] = useState({
    page: 1,
    pageSize: 20,
  });
  const { orders, loading, creating, createSucceeded } = useSelector(
    (state: StoreState) => state.orders,
  );

  const listOrder = useMemo<Array<OrderModel & { index: number }>>(() => {
    return orders.data.map((item, index) => ({ ...item, index: index + 1 }));
  }, [orders.data]);

  const handleCreateOrder = useCallback(
    (form: CreateOrderForm) => {
      dispatch(
        createOrderAction.request({
          price: +form.price,
          productName: form.productName,
          quantity: +form.quantity,
          totalAmount: +form.price * +form.quantity,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    // Effect for close CreateModal when create order succeeded
    if (createSucceeded) {
      setShowCreateModal(false);
    }
  }, [createSucceeded]);

  useLongPolling(
    useCallback(
      () => dispatch(getOrderAction.request({ page, pageSize, silent: true })),
      [dispatch, page, pageSize],
    ),
    5000,
  );

  useEffect(() => {
    // get order when page, pageSize change
    dispatch(getOrderAction.request({ page, pageSize }));
  }, [dispatch, page, pageSize]);

  return (
    <>
      <Space size={'large'} direction={'vertical'} style={{ width: '100%' }}>
        <PageHeader
          title="Setel"
          extra={[
            <Button
              onClick={() => setShowCreateModal(true)}
              title={'Create'}
              key={1}
            >
              <PlusOutlined />
              Create New Order
            </Button>,
          ]}
        />
        <Table
          rowKey={'_id'}
          loading={loading}
          columns={columns}
          dataSource={listOrder}
          pagination={{
            onChange: (_page, _pageSize) =>
              setPagination({ page: _page, pageSize: _pageSize }),
            total: orders.totalItem,
            pageSize: orders.pageSize,
            current: orders.page,
          }}
        />
      </Space>
      <CreateOrderModal
        disabled={creating}
        onCreateOrder={handleCreateOrder}
        visible={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </>
  );
};

export default OrderDetail;
