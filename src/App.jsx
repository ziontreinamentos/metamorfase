import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdminPage from "./AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage variant="whatsapp" />} />
        <Route path="/agosto" element={<LandingPage variant="checkout" />} />
        <Route path="/lista-espera" element={<LandingPage variant="waitlist" />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
