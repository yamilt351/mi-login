import "./App.css";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import MenuBar from "./components/NavBar/menuBar";
import Login from "./components/Login/Login"
import Cart from "./components/Cart/Cart"
import Hot from "./components/Hot/Hot.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
return (        
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Explore" element={<Footer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Hot" element={<Hot />} />
        <Route path="/Categories" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
