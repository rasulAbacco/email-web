import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import "../styles/campaigns.css";

const headers = ["Name", "Status", "Type", "Sent", "Open Rate", "Click Rate", "Revenue"];

const rows = [
  ["Spring Sale", "Sent", "Email", "5,000", "38%", "12%", "$1,250"],
  ["Black Friday", "Scheduled", "Email", "—", "—", "—", "—"],
  ["Product Launch", "Sent", "Email", "3,200", "45%", "20%", "$900"],
  ["Newsletter #17", "Draft", "Email", "—", "—", "—", "—"],
  ["Survey Request", "Sent", "Email", "1,800", "60%", "18%", "$430"],
  ["Holiday Promo", "Sent", "Email", "6,700", "50%", "30%", "$1,850"],
  ["New Feature Update", "Sent", "Email", "2,300", "42%", "15%", "$610"],
];

export default function CampaignsPage() {
  return (
    <AppLayout>
      <div className="campaigns-wrapper">
        <PageHeader
          title="Campaigns"
          subtitle="Manage and send email campaigns"
        />
        <div className="campaigns-table-container">
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    </AppLayout>
  );
}
