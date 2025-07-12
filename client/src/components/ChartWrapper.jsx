import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../index.css";

export default function ChartWrapper({ data }) {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Performance Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="label" tick={{ fill: "#555" }} />
          <YAxis tick={{ fill: "#555" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", borderColor: "#ddd" }}
            labelStyle={{ color: "#333" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
