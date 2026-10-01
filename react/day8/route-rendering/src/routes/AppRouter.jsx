import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Service from "../pages/Service";
import MainLayout from "./MainLayout";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="service" element={<Service />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<main className="p-6"><h1 className="text-2xl font-bold">Page not found</h1><p>Use the navigation links to choose a page.</p></main>} />
  </Routes>
);

export default AppRouter;
