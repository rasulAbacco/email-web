import AppLayout from "../layouts/AppLayout";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import "../styles/forms.css";

const dummyForms = [
  { name: "Newsletter Signup", type: "Embedded", status: "Active" },
  { name: "Promo Popup", type: "Popup", status: "Inactive" },
  { name: "Beta Access Form", type: "Embedded", status: "Active" },
  { name: "Survey Form", type: "Popup", status: "Inactive" },
  { name: "Early Bird Waitlist", type: "Embedded", status: "Active" },
];

export default function FormsPage() {
  return (
    <AppLayout>
      <div className="forms-page-wrapper">
        <PageHeader title="Forms" subtitle="Create and customize sign-up forms" />
        <div className="form-section">
          <p className="form-description">
            Design and manage embedded or popup forms for your website.
          </p>
          <Button>Create New Form</Button>
        </div>
        <div className="form-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyForms.map((form, index) => (
                <tr key={index}>
                  <td>{form.name}</td>
                  <td>{form.type}</td>
                  <td>{form.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
