export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Back to top bar */}
      <button
        className="footer__top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </button>

      {/* Link columns */}
      <div className="footer__links">
        <div>
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h3>Shop With Us</h3>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates</a></li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span className="footer__brand">amazon<span>.shop</span></span>
        <p>© {year} Amazon.shop. All rights reserved.</p>
      </div>
    </footer>
  );
}