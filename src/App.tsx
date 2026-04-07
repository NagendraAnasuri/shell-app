import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductsLoader from "./ProductsLoader";
import CartLoader from "./CartLoader";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<h1>Shell Home</h1>} />
        <Route path="/products" element={<ProductsLoader />} />
        <Route path="/cart" element={<CartLoader />} />
      </Routes>
    </BrowserRouter>
  );
}