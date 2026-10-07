import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

// Custom hook: shortcut to read cart state and dispatch actions
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
