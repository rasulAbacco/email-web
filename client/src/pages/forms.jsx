import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function FormsPage() {
  return (
    <AppLayout>
      <PageHeader title="Forms" subtitle="Create and customize sign-up forms" />
      <div className="bg-card p-6 rounded-lg shadow">
        <p className="mb-4">Design and manage embedded or popup forms for your website.</p>
        <Button>Create New Form</Button>
      </div>
    </AppLayout>
  );
}
