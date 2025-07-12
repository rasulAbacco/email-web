import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import "../styles/setting.css";

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="settings-page">
        <PageHeader title="Settings" subtitle="Update your preferences and plan" />

        <div className="settings-section">
          <h2>Profile</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>

        <div className="settings-section">
          <h2>API Key</h2>
          <p className="api-key">sk_live_39gkfd8390adk… <button className="copy-btn">Copy</button></p>
        </div>

        <div className="settings-section">
          <h2>Plan</h2>
          <p>You are on the <strong>Pro Plan</strong>. <button className="upgrade-btn">Upgrade</button></p>
        </div>
      </div>
    </AppLayout>
  );
}
