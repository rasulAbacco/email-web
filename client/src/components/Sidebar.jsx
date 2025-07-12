import { Link, useLocation } from "react-router-dom";
import "../index.css";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Automation", href: "/automation" },
  { name: "CRM", href: "/crm" },
  { name: "Forms", href: "/forms" },
  { name: "Analytics", href: "/analytics" },
  { name: "Integrations", href: "/integrations" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`sidebar-link ${
              location.pathname === link.href ? "active" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
