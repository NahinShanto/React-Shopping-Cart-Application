import { useCart } from "../hooks/useCart.js";

export default function Navbar({ search, onSearch, onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <h1 className="navbar__brand">amazon<span>.shop</span></h1>

        <div className="search">
          <input
            className="search__input"
            type="search"
            placeholder="Search products"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search products"
          />
          <span className="search__btn" aria-hidden="true">🔍</span>
        </div>

        <button className="cart-btn" onClick={onCartClick} aria-label={`Open cart, ${totalItems} items`}>
          <span className="cart-btn__count">{totalItems}</span>
          <span className="cart-btn__label">Cart</span>
        </button>
      </div>
    </header>
  );
}
