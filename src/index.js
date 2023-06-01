import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle/index';
// product provider
import ProductProvider from './contexts/ProductContext/index';
// sidebar provider
import SidebarProvider from './contexts/SidebarContext/index';
// cart provider
import CartProvider from './contexts/CartContext/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
