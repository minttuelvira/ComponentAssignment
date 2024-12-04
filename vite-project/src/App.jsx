import React, { useState } from 'react';
import ProductSelector from './components/ProductSelector';
import OrderInfo from './components/OrderInfo';
import './App.css';
import logo from './assets/pc-photo.png';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState({ name: 'AMD Ryzen 5 3600', price: 245 });
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="app-container">

      <header> 
      <img src={logo} alt="Logo" className="logo" />
      <h1>Welcome to product page!</h1>
      </header>


      <main>
        <ProductSelector
          selectedProduct={selectedProduct}
          quantity={quantity}
          onProductChange={handleProductChange}
          onQuantityChange={handleQuantityChange}
        />
        <OrderInfo selectedProduct={selectedProduct} quantity={quantity} />
      </main>
    </div>
  );
};

export default App;