import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Controls whether the cart drawer is open
  const [cartOpen, setCartOpen] = useState(false);
  // Text typed in the navbar search box
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        search={search}
        onSearch={setSearch}
        onCartClick={() => setCartOpen(true)}
      />
      <main className="container">
        <ProductGrid search={search} />
      </main>
      <Footer/>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
