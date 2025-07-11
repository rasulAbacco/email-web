export default function Table({ headers = [], rows = [] }) {
  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-muted">
          {headers.map((h, i) => (
            <th key={i} className="text-left p-2">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t">
            {row.map((cell, j) => (
              <td key={j} className="p-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
