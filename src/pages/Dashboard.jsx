import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { leadsData } from '../data/data';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WIDGETS = {
  totalSales: { id: 'totalSales', title: 'Total Sales', color: 'bg-blue-600' },
  avgEngagement: { id: 'avgEngagement', title: 'Average Engagement', color: 'bg-green-600' },
  recentLeads: { id: 'recentLeads', title: 'Recent Leads', color: 'bg-purple-600' },
  trendChart: { id: 'trendChart', title: 'Sales & Engagement Trend', color: 'bg-white' },
};

export default function Dashboard() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    const savedWidgets = JSON.parse(localStorage.getItem('dashboardWidgets'));
    setWidgets(savedWidgets || Object.keys(WIDGETS));
  }, []);

  useEffect(() => {
    localStorage.setItem('dashboardWidgets', JSON.stringify(widgets));
  }, [widgets]);

  const WidgetComponents = {
    totalSales: (
      <div className="widget p-4 rounded-lg bg-blue-600 text-white shadow-md">
        <h3 className="text-lg font-semibold">Total Sales</h3>
        <p className="text-2xl font-medium">${leadsData.reduce((acc, lead) => acc + lead.sales, 0)}</p>
      </div>
    ),
    avgEngagement: (
      <div className="widget p-4 rounded-lg bg-green-600 text-white shadow-md">
        <h3 className="text-lg font-semibold">Average Engagement</h3>
        <p className="text-2xl font-medium">{(leadsData.reduce((acc, lead) => acc + lead.engagement, 0) / leadsData.length).toFixed(1)}%</p>
      </div>
    ),
    recentLeads: (
      <div className="widget p-4 rounded-lg bg-purple-600 text-white shadow-md">
        <h3 className="text-lg font-semibold">Recent Leads</h3>
        <ul className="mt-2 space-y-1">
          {leadsData.slice(-3).map((lead) => (
            <li key={lead.id} className="text-sm">{lead.name}</li>
          ))}
        </ul>
      </div>
    ),
    trendChart: (
      <div className="widget p-6 rounded-lg bg-white shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Sales & Engagement Trend</h3>
        <Bar
          data={{
            labels: leadsData.map((lead) => lead.date),
            datasets: [
              {
                label: 'Sales ($)',
                data: leadsData.map((lead) => lead.sales),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
              },
              {
                label: 'Engagement (%)',
                data: leadsData.map((lead) => lead.engagement),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
              },
            ],
          }}
        />
      </div>
    ),
  };

  const addWidget = (widgetId) => {
    if (!widgets.includes(widgetId)) {
      setWidgets((prevWidgets) => [...prevWidgets, widgetId]);
    }
  };

  const removeWidget = (widgetId) => {
    setWidgets((prevWidgets) => prevWidgets.filter((widget) => widget !== widgetId));
  };

  const renderWidgets = () => {
    return widgets.map((widget, index) => (
      <div
        key={widget}
        data-grid={{ i: widget, x: index % 2, y: Math.floor(index / 2), w: 1, h: 2 }}
        className="p-2"
      >
        {WidgetComponents[widget]}
        <button
          onClick={() => removeWidget(widget)}
          className="text-red-500 text-xs mt-2 hover:underline"
        >
          Remove
        </button>
      </div>
    ));
  };

  return (
    <div className="dashboard p-4 max-w-full mx-auto bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-gray-800">Dashboard</h2>

      <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
        {Object.keys(WIDGETS).map((widgetId) => (
          <button
            key={widgetId}
            onClick={() => addWidget(widgetId)}
            className={`px-4 py-2 text-sm rounded ${widgets.includes(widgetId) ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
            disabled={widgets.includes(widgetId)}
          >
            {WIDGETS[widgetId].title}
          </button>
        ))}
      </div>

      <ResponsiveGridLayout
        className="layout"
        layouts={{
          lg: widgets.map((widget, i) => ({ i: widget, x: i % 2, y: Math.floor(i / 2), w: 1, h: 2 })),
          sm: widgets.map((widget, i) => ({ i: widget, x: 0, y: i, w: 1, h: 2 })),
        }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
        rowHeight={200}
        isResizable={true}
      >
        {renderWidgets()}
      </ResponsiveGridLayout>
    </div>
  );
}
