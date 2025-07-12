import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-heading">Page Not Found</h2>
        <p className="notfound-message">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/dashboard" className="notfound-button">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
