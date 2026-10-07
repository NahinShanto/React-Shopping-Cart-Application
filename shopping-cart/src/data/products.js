// Mock product data. Replace with an API call (e.g. fetch) if needed.
const img = (seed) => `https://picsum.photos/seed/${seed}/480/360`;

export const products = [
  { id: 1, title: "Classic Backpack", category: "Bags", price: 49.99, image: img("backpack") },
  { id: 2, title: "Wireless Headphones", category: "Electronics", price: 89.5, image: img("headphones") },
  { id: 3, title: "Running Shoes", category: "Footwear", price: 64.0, image: img("shoes") },
  { id: 4, title: "Cotton T-Shirt", category: "Clothing", price: 19.99, image: img("tshirt") },
  { id: 5, title: "Smart Watch", category: "Electronics", price: 129.0, image: img("watch") },
  { id: 6, title: "Leather Wallet", category: "Accessories", price: 34.5, image: img("wallet") },
  { id: 7, title: "Sunglasses", category: "Accessories", price: 24.99, image: img("sunglasses") },
  { id: 8, title: "Water Bottle", category: "Lifestyle", price: 14.0, image: img("bottle") },
];
