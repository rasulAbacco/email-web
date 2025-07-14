import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user); // Save user in context
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      alert("Server error: " + err.message);
    }
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
