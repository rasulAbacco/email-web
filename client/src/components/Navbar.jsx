import { Link, useNavigate } from 'react-router-dom';


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
  const router = useNavigate();

  return (
    <aside className="w-64 bg-card h-screen p-6 border-r">
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-2 rounded-md hover:bg-muted ${
              router.pathname === link.href ? "bg-muted font-bold" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
