import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import "../styles/automation.css"; // External CSS file

export default function AutomationPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Automation"
        subtitle="Build email workflows and triggers"
      />
      <div className="automation-box">
        <p className="automation-description">
          Drag and drop steps to create your automation flow.
        </p>
        <Button>Create New Workflow</Button>
      </div>
    </AppLayout>
  );
}
