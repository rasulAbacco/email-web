import "../styles/navbar.css";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-title">EmailAI Pro</div>
      <div className="navbar-actions">
        <ThemeToggle />
      </div>
    </header>
  );
}
