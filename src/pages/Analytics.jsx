import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { leadsData } from '../data/data';

const calculateAnalyticsData = () => {
  const months = ['January', 'February', 'March', 'April'];
  const salesData = leadsData.map((lead) => lead.sales);
  const engagementData = leadsData.map((lead) => lead.engagement);
  const totalSales = salesData.reduce((acc, val) => acc + val, 0);
  const avgEngagement = engagementData.reduce((acc, val) => acc + val, 0) / engagementData.length;

  return { months, salesData, engagementData, totalSales, avgEngagement };
};

export default function Analytics() {
  const { months, salesData, engagementData, totalSales, avgEngagement } = calculateAnalyticsData();

  const barData = {
    labels: months,
    datasets: [
      { label: 'Monthly Sales ($)', data: salesData, backgroundColor: 'rgba(54, 162, 235, 0.6)' },
    ],
  };

  const lineData = {
    labels: months,
    datasets: [
      { label: 'User Engagement (%)', data: engagementData, borderColor: 'rgba(75, 192, 192, 0.6)', fill: false },
    ],
  };

  return (
    <div className="analytics p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-gray-800">Analytics Overview</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg font-medium text-gray-700">Total Sales: <span className="font-semibold">${totalSales}</span></p>
        <p className="text-lg font-medium text-gray-700">Average Engagement: <span className="font-semibold">{avgEngagement.toFixed(1)}%</span></p>
      </div>

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
