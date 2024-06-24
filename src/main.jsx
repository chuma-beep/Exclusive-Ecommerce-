import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/cart-context.jsx'
import { WishListProvider } from './context/wishlist-context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <CartProvider>
  <WishListProvider>
    <App />
  </WishListProvider>
  </CartProvider>
  </React.StrictMode>,
)