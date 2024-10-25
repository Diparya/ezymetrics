// components/Widget.js
export default function Widget({ title, data }) {
  return (
    <div className="widget bg-white shadow p-4 rounded-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <div>{data}</div>
    </div>
  );
}
