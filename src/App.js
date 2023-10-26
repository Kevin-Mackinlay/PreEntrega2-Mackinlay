import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Item from "./Components/Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar/Navbar";
import Toast from "./Components/Toast/Toast.jsx";
import { CartProvider } from "./Components/Context/CartContext.jsx";
import ItemDetail from "./Components/ItemDetail/ItemDetail.jsx";

function App() {
  return (
    <BrowserRouter className="App">
      <MyNavbar />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:itemId" element={<Item />} />
          <Route path="/cart" element={<Cart />} />

          {/* <Route path='/checkout' element={<Checkout/>}/> */}
          {/* <Route path="*" element={<h1>404 NOT FOUND</h1>} /> */}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
