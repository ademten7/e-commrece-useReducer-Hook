import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/" || "/home"} element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
