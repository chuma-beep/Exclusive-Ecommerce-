import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import JustForYou from "./components/JustForYou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/login" element={<Login />} />
       <Route path="/wishlist" element={<Wishlist />} />
       <Route path="/JustForYou" element={<JustForYou />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
