import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function Analytics() {
  // Dummy data for monthly metrics
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [5000, 10000, 7500, 12000, 9000, 15000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Engagement (%)',
        data: [50, 60, 55, 70, 65, 75],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="analytics p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-gray-800">Analytics Overview</h2>

      <div className="chart-container mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Sales</h3>
        <div className="overflow-x-auto">
          <Bar data={barData} />
        </div>
      </div>

      <div className="chart-container bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Engagement</h3>
        <div className="overflow-x-auto">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}
