import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import CampaignsPage from "./pages/campaigns";
import AutomationPage from "./pages/automation";
import CRMPage from "./pages/crm";
import FormsPage from "./pages/forms";
import AnalyticsPage from "./pages/analytics";
import IntegrationsPage from "./pages/integrations";
import SettingsPage from "./pages/settings";
import NotFoundPage from "./pages/404";
import useAuthGuard from "./hooks/useAuthGuard";

function ProtectedRoute({ children }) {
  useAuthGuard();
  return children;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage to="/LandingPage" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/campaigns" element={<ProtectedRoute><CampaignsPage /></ProtectedRoute>} />
          <Route path="/automation" element={<ProtectedRoute><AutomationPage /></ProtectedRoute>} />
          <Route path="/crm" element={<ProtectedRoute><CRMPage /></ProtectedRoute>} />
          <Route path="/forms" element={<ProtectedRoute><FormsPage /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
          <Route path="/integrations" element={<ProtectedRoute><IntegrationsPage /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
