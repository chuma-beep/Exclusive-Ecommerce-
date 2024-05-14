import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import ViewProduct from "./components/ViewProduct";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productID" element={<ViewProduct />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
