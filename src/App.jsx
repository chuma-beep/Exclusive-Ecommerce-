import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/JustForYou" element={<JustForYou />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App;
