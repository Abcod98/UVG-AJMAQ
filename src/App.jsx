import "./App.css";
import { AuthProvider } from "./context/authContext";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// * COMPONENTS
import NavBar from "./components/_partials/NavBar";
import Footer from "./components/_partials/Footer";
import Banner from "./components/Banner";

// * PAGES
import Saludos from "./pages/Saludos";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacto from "./pages/Contacto";
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/saludos" element={<Saludos />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/contacto"
          element={<Navigate replace to="/contacto"></Navigate>}
        ></Route>

        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
