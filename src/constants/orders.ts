export const OrderValidateMessage = {
  productName: 'Product name is invalid',
  price: 'Price is invalid',
  quantity: 'Quantity is invalid',
};

export enum OrderStatus {
  Cancelled = 'cancelled',
  Create = 'created',
  Confirmed = 'confirmed',
}
