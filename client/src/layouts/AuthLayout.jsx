import "../index.css"; // adjust path if needed

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-card">
        {children}
      </div>
    </div>
  );
}
