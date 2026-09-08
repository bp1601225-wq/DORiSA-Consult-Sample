import { Routes, Route } from "react-router";
import LandingPage from "../Pages/Home/LandingPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/about" element={<h1>About</h1>} />

      <Route path="/animations" element={<h1>Animations</h1>} />

      <Route path="/contact" element={<h1>Contact</h1>} />

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
