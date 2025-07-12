import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import "../styles/crm.css";

const contacts = [
  ["John Doe", "john@example.com", "Prospect", "Active"],
  ["Jane Smith", "jane@domain.com", "Customer", "Inactive"],
  ["Robert Brown", "robert@site.com", "Lead", "Active"],
  ["Alice Johnson", "alice@mail.com", "Customer", "Active"],
  ["Mark Wilson", "mark@abc.com", "Prospect", "Inactive"],
  ["Lisa Taylor", "lisa@company.com", "Lead", "Active"],
  ["David Lee", "david@domain.com", "Customer", "Active"],
  ["Emma Davis", "emma@service.com", "Prospect", "Active"],
  ["Tom Harris", "tom@hello.com", "Lead", "Inactive"],
  ["Sophia White", "sophia@white.com", "Customer", "Active"],
];

export default function CRMPage() {
  return (
    <AppLayout>
      <div className="crm-wrapper">
        <PageHeader title="CRM" subtitle="Manage contacts and pipelines" />
        <div className="crm-table-container">
          <Table
            headers={["Name", "Email", "Segment", "Status"]}
            rows={contacts}
          />
        </div>
      </div>
    </AppLayout>
  );
}
