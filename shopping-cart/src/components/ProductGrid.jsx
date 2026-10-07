import { useEffect, useState } from "react";
import { products as mockProducts } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ search = "" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulates loading products from an API
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(mockProducts);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer); // cleanup avoids state updates after unmount
  }, []);

  if (loading) return <p className="status">Loading products…</p>;

  // Filter by title or category as the user types
  const q = search.trim().toLowerCase();
  const visible = items.filter(
    (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );

  if (visible.length === 0) return <p className="status">No products match "{search}".</p>;

  return (
    <section className="grid" aria-label="Products">
      {visible.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
