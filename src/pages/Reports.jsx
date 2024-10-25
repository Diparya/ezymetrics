import React from 'react';
import { CSVLink } from 'react-csv';
import { leadsData } from '../data/data';

// Prepare report data with analytics
const prepareReportData = () => {
  const totalSales = leadsData.reduce((acc, lead) => acc + lead.sales, 0);
  const avgEngagement = leadsData.reduce((acc, lead) => acc + lead.engagement, 0) / leadsData.length;

  const reportData = leadsData.map((lead) => ({
    ...lead,
    totalSales,
    avgEngagement,
  }));

  return { reportData, totalSales, avgEngagement };
};

export default function Reports() {
  const { reportData, totalSales, avgEngagement } = prepareReportData();

  const headers = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Sales ($)', key: 'sales' },
    { label: 'Engagement (%)', key: 'engagement' },
    { label: 'Date', key: 'date' },
    { label: 'Total Sales', key: 'totalSales' },
    { label: 'Avg Engagement (%)', key: 'avgEngagement' },
  ];

  return (
    <div className="reports p-4 lg:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">Reports Overview</h2>
      <div className="text-lg lg:text-xl font-medium mb-4 text-gray-700">
        <p>Total Sales: <span className="font-bold text-blue-600">${totalSales}</span></p>
        <p>Average Engagement: <span className="font-bold text-green-600">{avgEngagement.toFixed(2)}%</span></p>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              {headers.map((header) => (
                <th key={header.key} className="py-3 px-4 text-left text-sm lg:text-base font-semibold">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reportData.map((row, index) => (
              <tr key={row.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b`}>
                <td className="py-2 px-4 text-sm lg:text-base">{row.id}</td>
                <td className="py-2 px-4 text-sm lg:text-base">{row.name}</td>
                <td className="py-2 px-4 text-sm lg:text-base">${row.sales}</td>
                <td className="py-2 px-4 text-sm lg:text-base">{row.engagement}%</td>
                <td className="py-2 px-4 text-sm lg:text-base">{row.date}</td>
                <td className="py-2 px-4 text-sm lg:text-base">${row.totalSales}</td>
                <td className="py-2 px-4 text-sm lg:text-base">{row.avgEngagement}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Export Button */}
      <CSVLink
        data={reportData}
        headers={headers}
        filename="report_data.csv"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-sm lg:text-base rounded hover:bg-blue-700 transition-all"
      >
        Export as CSV
      </CSVLink>
    </div>
  );
}
