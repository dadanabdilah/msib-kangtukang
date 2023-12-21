import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Galeri from "./pages/Galeri";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderMitra from "./pages/OrderMitra";
import CariTukang from "./pages/CariTukang";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mitra" element={<OrderMitra />} />
        <Route path="/caritukang" element={<CariTukang/>}/>
      </Routes>
    </>
  );
}
