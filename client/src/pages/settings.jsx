import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";

export default function SettingsPage() {
  return (
    <AppLayout>
      <PageHeader title="Settings" subtitle="Update your preferences and plan" />
      {/* Profile settings, API key, plan info, etc. */}
    </AppLayout>
  );
}
