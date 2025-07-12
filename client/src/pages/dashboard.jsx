import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import "../styles/dashboard.css";

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="dashboard-container">
        <PageHeader
          title="Dashboard"
          subtitle="Overview of activity and performance"
        />
        <div className="dashboard-content">
          {/* Add widgets, charts, and cards here */}
          <div className="metric-card">Total Emails Sent: 12,340</div>
          <div className="metric-card">Open Rate: 45.2%</div>
          <div className="metric-card">Click Rate: 7.1%</div>
        </div>
      </div>
    </AppLayout>
  );
}
