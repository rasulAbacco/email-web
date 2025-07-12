import { useEffect } from "react";
import "../styles/modal.css";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
