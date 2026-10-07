import { useCart } from "../hooks/useCart.js";
import { useToast } from "../hooks/useToast.js";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    dispatch({ type: "ADD", product });
    showToast("Item has been successfully added to your cart!");
  };

  return (
    <article className="card">
      <img className="card__img" src={product.image} alt={product.title} loading="lazy" />
      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h2 className="card__title">{product.title}</h2>
        <div className="card__footer">
          <span className="card__price">${product.price.toFixed(2)}</span>
          <button className="btn" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
