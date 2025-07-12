import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/signup.css";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        navigate("/dashboard"); // change if needed
      } else {
        const data = await res.json();
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">Sign Up</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
        <Button type="submit">Create Account</Button>
      </form>
      <p className="auth-footer-text">
        Already have an account? <Link to="/login" className="auth-link">Log in</Link>
      </p>
    </AuthLayout>
  );
}
