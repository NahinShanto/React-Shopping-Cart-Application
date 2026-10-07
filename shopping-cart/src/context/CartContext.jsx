import { createContext, useEffect, useMemo, useReducer } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "shopping-cart";

// Pure function: given current cart + action, return the next cart
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const exists = state.some((i) => i.id === action.product.id);
      return exists
        ? state.map((i) =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          )
        : [...state, { ...action.product, qty: 1 }];
    }
    case "INCREASE":
      return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i));
    case "DECREASE":
      // Quantity never goes below 1; use REMOVE to delete an item
      return state.map((i) =>
        i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
      );
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

// Load saved cart once on first render
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  // Save the cart whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Derived values: recalculated only when the cart changes
  const value = useMemo(
    () => ({
      cart,
      dispatch,
      totalItems: cart.reduce((n, i) => n + i.qty, 0),
      totalPrice: cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
