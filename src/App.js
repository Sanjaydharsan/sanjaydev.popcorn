import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <Router>
      <Navbar onLoginClick={() => setShowSignIn(true)}  />
      <Login show={showSignIn} onClose={() => setShowSignIn(false)} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
