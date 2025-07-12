import "../index.css";

export default function Card({ title, children }) {
  return (
    <div className="custom-card">
      {title && <h2 className="custom-card-title">{title}</h2>}
      <div className="custom-card-content">{children}</div>
    </div>
  );
}
