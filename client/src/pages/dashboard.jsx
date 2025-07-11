import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";

export default function DashboardPage() {
  return (
    <AppLayout>
      <PageHeader title="Dashboard" subtitle="Overview of activity and performance" />
      {/* Metrics, charts, etc. go here */}
    </AppLayout>
  );
}
