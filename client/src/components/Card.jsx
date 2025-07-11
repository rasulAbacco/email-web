export default function Card({ title, children }) {
  return (
    <div className="bg-card rounded-xl shadow p-4 mb-4">
      {title && <h2 className="text-lg font-medium mb-2">{title}</h2>}
      {children}
    </div>
  );
}
