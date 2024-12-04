import React from 'react';

const products = [
  { name: 'AMD Ryzen 5 3600', price: 245 }
];

const ProductSelector = ({ selectedProduct, quantity, onProductChange, onQuantityChange }) => {
  return (
    <div className="product-selector">
      <h2>Select product</h2>
      <div className="form-group">
        <label>Product: </label>
        <select
          value={selectedProduct.name}
          onChange={(e) =>
            onProductChange(products.find((p) => p.name === e.target.value))
          }
        >
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Quantity: </label>
        <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export default ProductSelector;