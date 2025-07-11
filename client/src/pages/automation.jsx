import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function AutomationPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Automation"
        subtitle="Build email workflows and triggers"
      />
      <div className="bg-card p-6 rounded-lg shadow">
        <p className="mb-4">Drag and drop steps to create your automation flow.</p>
        <Button>Create New Workflow</Button>
      </div>
    </AppLayout>
  );
}
