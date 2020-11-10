import React, { FC, useCallback, useEffect } from 'react';
import Modal from 'antd/lib/modal/Modal';
import Form from 'antd/lib/form/Form';
import useForm from 'antd/lib/form/hooks/useForm';
import FormItem from 'antd/lib/form/FormItem';
import message from 'antd/lib/message';
import Input from 'antd/lib/input';
import { OrderValidateMessage } from '../../constants/orders';

interface CreateOrderModalProps {
  visible: boolean;
  disabled: boolean;
  onClose: () => void;
  onCreateOrder: (form: CreateOrderForm) => void;
}

export interface CreateOrderForm {
  productName: string;
  quantity: string;
  price: string;
}

const InitFormValues: CreateOrderForm = {
  price: '',
  quantity: '',
  productName: '',
};

const CreateOrderModal: FC<CreateOrderModalProps> = ({
  visible,
  onClose,
  disabled,
  onCreateOrder,
}) => {
  const [form] = useForm();
  const handlePressOk = useCallback(() => {
    form
      .validateFields()
      .then((values: CreateOrderForm) => {
        onCreateOrder(values);
      })
      .catch((e) => {
        message.warn('Form validation failed');
      });
  }, [form, onCreateOrder]);
  const handlePressCancel = useCallback(() => {
    form.resetFields();
    onClose();
  }, [form, onClose]);
  useEffect(() => {
    if (!visible) {
      form.resetFields();
    }
  }, [form, visible]);
  return (
    <Modal
      title="Create new Order"
      visible={visible}
      onCancel={handlePressCancel}
      onOk={handlePressOk}
      okButtonProps={{
        disabled,
        loading: disabled,
      }}
      cancelButtonProps={{
        disabled,
      }}
      closable={!disabled}
      destroyOnClose={false}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        initialValues={InitFormValues}
      >
        <FormItem
          label="Product Name"
          name={'productName'}
          rules={[
            {
              type: 'string',
              required: true,
              message: OrderValidateMessage.productName,
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Price"
          name={'price'}
          rules={[
            {
              type: 'number',
              required: true,
              transform: (v) => (v ? +v : v),
              min: 0,
              message: OrderValidateMessage.price,
            },
          ]}
        >
          <Input prefix={'$'} type={'number'} />
        </FormItem>
        <FormItem
          label="Quantity"
          name={'quantity'}
          rules={[
            {
              type: 'number',
              required: true,
              transform: (v) => (v ? +v : v),
              min: 0,
              message: OrderValidateMessage.price,
            },
          ]}
        >
          <Input type={'number'} />
        </FormItem>
        <FormItem
          label="Total Amount"
          shouldUpdate={(prev: CreateOrderForm, current: CreateOrderForm) =>
            prev.quantity !== current.quantity || prev.price !== current.price
          }
        >
          {() => (
            <Input
              readOnly
              prefix={'$'}
              value={
                +form.getFieldValue('quantity') * +form.getFieldValue('price')
              }
            />
          )}
        </FormItem>
      </Form>
    </Modal>
  );
};

export default CreateOrderModal;
