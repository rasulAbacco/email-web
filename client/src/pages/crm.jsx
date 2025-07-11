import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";

const contacts = [
  ["John Doe", "john@example.com", "Prospect", "Active"],
  ["Jane Smith", "jane@domain.com", "Customer", "Inactive"],
  ["Robert Brown", "robert@site.com", "Lead", "Active"],
];

export default function CRMPage() {
  return (
    <AppLayout>
      <PageHeader title="CRM" subtitle="Manage contacts and pipelines" />
      <Table
        headers={["Name", "Email", "Segment", "Status"]}
        rows={contacts}
      />
    </AppLayout>
  );
}
