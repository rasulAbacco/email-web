import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import ChartWrapper from "../components/ChartWrapper";
import "../styles/analytics.css"; // External styles

const dummyData = [
  { label: "Jan", value: 500 },
  { label: "Feb", value: 700 },
  { label: "Mar", value: 900 },
  { label: "Apr", value: 650 },
  { label: "May", value: 800 },
];

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="analytics-header">
        <PageHeader title="Analytics" subtitle="Track performance and engagement" />
      </div>
      <div className="analytics-grid">
        <ChartWrapper data={dummyData} />
        <ChartWrapper data={dummyData} />
      </div>
    </AppLayout>
  );
}
