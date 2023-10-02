import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Item from "./Components/Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar/Navbar";
import Toast from "./Components/Toast/Toast.jsx";


function App() {
  return (
    <BrowserRouter className="App">
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:itemId" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
