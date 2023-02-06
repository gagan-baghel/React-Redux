import { useState } from "react";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
