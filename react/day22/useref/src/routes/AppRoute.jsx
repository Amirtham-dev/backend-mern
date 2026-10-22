
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import LoginForm from "../pages/LoginForm";
import PasswordShowHide from "../pages/PasswordShowHide";
import SinglePageNavigation from "../pages/SinglePageNavigation";
import Stopwatch from "../pages/Stopwatch";
import OtpVerification from "../pages/OtpVerification";

const AppRoute = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/task1" replace />} />
        <Route path="/task1" element={<LoginForm />} />
        <Route path="/task2" element={<PasswordShowHide />} />
        <Route path="/task3" element={<SinglePageNavigation />} />
        <Route path="/task4" element={<Stopwatch />} />
        <Route path="/task5" element={<OtpVerification />} />
        <Route path="*" element={<Navigate to="/task1" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
