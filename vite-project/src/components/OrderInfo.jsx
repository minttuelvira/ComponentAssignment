import React from 'react';

const OrderInfo = ({ selectedProduct, quantity }) => {
  const total = selectedProduct.price * quantity;

  return (
    <div className="order-info">
      <h2>Order info</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.name}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderInfo;