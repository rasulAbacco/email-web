import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import './index.css'

import LandingPage from "./pages/LandingPage";
import Integration from "./pages/Landing-Pages/Integrations";
import Features from "./pages/Landing-Pages/Features";
import Abouts from "./pages/Landing-Pages/About";
import Pricings from "./pages/Landing-Pages/Pricing";

import DashboardPage from "./Dashboard/dashboard";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import CampaignsPage from "./Dashboard/campaigns";
import AutomationPage from "./pages/automation";
import CRMPage from "./pages/crm";
import FormsPage from "./pages/forms";
import AnalyticsPage from "./Dashboard/analytics";
import IntegrationsPage from "./Dashboard/integrations";
import SettingsPage from "./pages/settings";
import NotFoundPage from "./pages/404";

import useAuthGuard from "./hooks/useAuthGuard";
import Navigation from "./components/Navigation";
import ChatBotAndSocial from "./components/ChatBotAndSocial";

function ProtectedRoute({ children }) {
  useAuthGuard();
  return children;
}

export default function App() {
  const location = useLocation();
  const isPublicRoute = [
    "/", "/login", "/signup", "/features", "/pricings", "/abouts", "/integration"
  ].includes(location.pathname);

  return (
    <ThemeProvider>
      <AuthProvider>
        {isPublicRoute && <Navigation />}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricings" element={<Pricings />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/integration" element={<Integration />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/campaigns" element={<ProtectedRoute><CampaignsPage /></ProtectedRoute>} />
          <Route path="/automation" element={<ProtectedRoute><AutomationPage /></ProtectedRoute>} />
          <Route path="/crm" element={<ProtectedRoute><CRMPage /></ProtectedRoute>} />
          <Route path="/forms" element={<ProtectedRoute><FormsPage /></ProtectedRoute>} />
          <Route path="/dashboard/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          <Route path="/dashboard/integrations" element={<ProtectedRoute><IntegrationsPage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Optional: Chatbot only on landing (public) pages */}
        {isPublicRoute && <ChatBotAndSocial />}
      </AuthProvider>
    </ThemeProvider>
  );
}
