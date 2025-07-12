import "../index.css";

export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
    >
      {children}
    </button>
  );
}
