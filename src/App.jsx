import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
