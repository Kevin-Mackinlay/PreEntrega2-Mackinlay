import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Item from "./Components/Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar/Navbar";
import Toast from "./Components/Toast/Toast.jsx";
import { CartContext } from "./Components/Context/CartContext.jsx";

function App() {

  const eliminarProducto = (id) => {
    const productCart = cart.filter((product) => product.id !== id)
    SetCart (nuevoCart)
  }
  return (
    <BrowserRouter className="App">
      <MyNavbar />
      <CartContext.Provider value={{ ProductsCart: Cart, agregarProduct: setCart , eliminarProduct }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:itemId" element={<Item />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
