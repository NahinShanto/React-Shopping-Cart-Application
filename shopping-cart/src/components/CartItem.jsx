import { useCart } from "../hooks/useCart.js";
import { useToast } from "../hooks/useToast.js";

export default function CartItem({ item }) {
  const { dispatch } = useCart();
  const { showToast } = useToast();

  const handleRemove = () => {
    dispatch({ type: "REMOVE", id: item.id });
    showToast("Item has been removed from your cart!", "danger");
  };

  return (
    <li className="cart-item">
      <img className="cart-item__img" src={item.image} alt={item.title} />
      <div className="cart-item__info">
        <p className="cart-item__title">{item.title}</p>
        <p className="cart-item__price">${(item.price * item.qty).toFixed(2)}</p>
        <div className="qty">
          <button onClick={() => dispatch({ type: "DECREASE", id: item.id })} disabled={item.qty === 1} aria-label="Decrease quantity">−</button>
          <span>{item.qty}</span>
          <button onClick={() => dispatch({ type: "INCREASE", id: item.id })} aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button className="remove" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}
