import React from 'react';
import { leadsData } from '../data/data';

export default function Leads() {
  return (
    <div className="leads p-4 lg:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">Leads Management</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm lg:text-base font-semibold">ID</th>
              <th className="py-3 px-4 text-left text-sm lg:text-base font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-sm lg:text-base font-semibold">Sales ($)</th>
              <th className="py-3 px-4 text-left text-sm lg:text-base font-semibold">Engagement (%)</th>
              <th className="py-3 px-4 text-left text-sm lg:text-base font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead, index) => (
              <tr key={lead.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b`}>
                <td className="py-2 px-4 text-sm lg:text-base">{lead.id}</td>
                <td className="py-2 px-4 text-sm lg:text-base">{lead.name}</td>
                <td className="py-2 px-4 text-sm lg:text-base">${lead.sales}</td>
                <td className="py-2 px-4 text-sm lg:text-base">{lead.engagement}%</td>
                <td className="py-2 px-4 text-sm lg:text-base">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
