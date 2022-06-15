import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/products/_id/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:ProductId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
