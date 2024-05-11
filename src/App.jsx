import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Checkout from "./components/Checkout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
     
       
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
