import { ColumnsType } from 'antd/lib/table/interface';
import Text from 'antd/lib/typography/Text';
import Space from 'antd/lib/space';
import { Link } from 'react-router-dom';
import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import Modal from 'antd/lib/modal';
import { OrderModel } from '../models/order';
import { formatCurrency } from '../helpers/common.util';
import { cancelOrderAction } from '../store/orders/orders.action';
import { OrderStatus } from '../constants/orders';

export function useTableColumn() {
  const dispatch = useDispatch();
  const handleCancel = useCallback(
    (id: string) => {
      dispatch(cancelOrderAction.request(id));
    },
    [dispatch],
  );
  const handleClickCancel = useCallback(
    (id) => {
      return (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        Modal.confirm({
          title: 'Do you Want to cancel this order?',
          icon: <ExclamationCircleOutlined />,
          onOk() {
            handleCancel(id);
          },
        });
      };
    },
    [handleCancel],
  );
  const columns: ColumnsType = useMemo(
    () => [
      {
        title: 'Index',
        key: 'index',
        dataIndex: 'index',
      },
      {
        title: 'Product Name',
        key: 'productName',
        dataIndex: 'productName',
      },
      {
        title: 'Price',
        key: 'price',
        dataIndex: 'price',
        render(text: string) {
          return (
            <Text style={{ textTransform: 'capitalize' }}>
              {formatCurrency(text)}
            </Text>
          );
        },
      },
      {
        title: 'Quantity',
        key: 'quantity',
        dataIndex: 'quantity',
      },
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render(text: string) {
          return <Text style={{ textTransform: 'capitalize' }}>{text}</Text>;
        },
      },
      {
        title: 'Total Amount',
        key: 'totalAmount',
        dataIndex: 'totalAmount',
        render(text: string) {
          return (
            <Text style={{ textTransform: 'capitalize' }}>
              {formatCurrency(text)}
            </Text>
          );
        },
      },
      {
        title: 'Action',
        key: '_id',
        dataIndex: '_id',
        render(text: string, record: OrderModel) {
          return (
            <>
              <Space size="middle">
                <Link to={`/order/${record._id}`}>Detail</Link>
                {record.status === OrderStatus.Create && (
                  <a href={'#'} onClick={handleClickCancel(record._id)}>
                    Cancel
                  </a>
                )}
              </Space>
            </>
          );
        },
      },
    ],
    [handleClickCancel],
  );
  return columns;
}
