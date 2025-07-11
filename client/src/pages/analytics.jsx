import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import ChartWrapper from "../components/ChartWrapper";

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
      <PageHeader title="Analytics" subtitle="Track performance and engagement" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartWrapper data={dummyData} />
        <ChartWrapper data={dummyData} />
      </div>
    </AppLayout>
  );
}
