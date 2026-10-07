# React Shopping Cart

Responsive shopping cart built with React, Vite, Context API (`useReducer`) and plain CSS.

## Features
- Product grid (image, title, category, price)
- Add to cart, increase/decrease quantity, remove item, clear cart
- Real-time total items and total price
- Cart saved in `localStorage`
- Mobile-first responsive layout

## Run locally
```bash
npm install
npm run dev
```

## Structure
```
src/
├── components/  Navbar, ProductGrid, ProductCard, Cart, CartItem
├── context/     CartContext.jsx (reducer + provider)
├── data/        products.js (mock data)
├── hooks/       useCart.js
├── App.jsx
└── main.jsx
```
