import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

const integrations = [
  { name: "Shopify", description: "Sync customers from your store." },
  { name: "Zapier", description: "Connect with 5,000+ apps easily." },
  { name: "Google Sheets", description: "Push contacts to your spreadsheets." },
];

export default function IntegrationsPage() {
  return (
    <AppLayout>
      <PageHeader title="Integrations" subtitle="Connect tools and extend functionality" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((item) => (
          <Card key={item.name} title={item.name}>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <button className="mt-2 text-sm text-primary hover:underline">
              Connect
            </button>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
