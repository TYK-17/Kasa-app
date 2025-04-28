import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error404 from "./pages/Error404";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import logo from "/assets/logo.png";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header logoSrc={logo} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
