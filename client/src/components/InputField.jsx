import "../index.css"; // make sure this path matches your structure

export default function InputField({ label, ...props }) {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <input {...props} className="input-element" />
    </div>
  );
}
