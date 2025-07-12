import AuthLayout from "../layouts/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "../styles/login.css";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevents page refresh and default behavior

    // You can add validation here if needed
    const userData = {
      email,
      name: "Demo User", // Replace with real API call later
    };

    login(userData); // ✅ triggers redirect to /dashboard
  };

  return (
    <AuthLayout>
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Login to your account</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="login-button">Login</Button>
          </form>
          <p className="login-footer">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
