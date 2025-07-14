import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import "../styles/integration.css";

const integrations = [
  { name: "Shopify", description: "Sync customers from your store." },
  { name: "Zapier", description: "Connect with 5,000+ apps easily." },
  { name: "Google Sheets", description: "Push contacts to your spreadsheets." },
  { name: "Slack", description: "Send campaign updates to your team." },
  { name: "Stripe", description: "Track customer revenue." },
  { name: "HubSpot", description: "Sync CRM leads automatically." },
];

export default function IntegrationsPage() {
  return (
    <AppLayout>
      <div className="integrations-page">
        <PageHeader
          title="Integrations"
          subtitle="Connect tools and extend functionality"
        />
        <div className="integrations-grid">
          {integrations.map((item) => (
            <Card key={item.name} title={item.name}>
              <p className="integration-desc">{item.description}</p>
              <button className="connect-btn">Connect</button>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
