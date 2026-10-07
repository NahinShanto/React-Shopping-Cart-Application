import { useCart } from "../hooks/useCart.js";
import { useToast } from "../hooks/useToast.js";
import CartItem from "./CartItem.jsx";

export default function Cart({ open, onClose }) {
  const { cart, dispatch, totalItems, totalPrice } = useCart();
  const { showToast } = useToast();

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
    showToast("Your cart has been cleared!", "danger");
  };

  return (
    <>
      <div className={`overlay ${open ? "overlay--show" : ""}`} onClick={onClose} />
      <aside className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
        <div className="drawer__head">
          <h2>Your cart</h2>
          <button className="close" onClick={onClose} aria-label="Close cart">×</button>
        </div>

        {cart.length === 0 ? (
          <p className="status">Your cart is empty. Add a product to get started.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="summary">
              <div className="summary__row"><span>Total items</span><strong>{totalItems}</strong></div>
              <div className="summary__row"><span>Total price</span><strong>${totalPrice.toFixed(2)}</strong></div>
              <button className="btn btn--ghost" onClick={handleClear}>Clear cart</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
