import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page min-h-screen flex flex-col items-center justify-between bg-gray-100">
      {/* Header Section */}
      <header className="home-header text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Your Customizable Dashboard</h1>
        <p className="text-lg text-gray-600">Your all-in-one platform for lead management, analytics, and reporting.</p>
      </header>

      {/* Link Sections */}
      <section className="home-sections grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-6xl w-full">
        <Link to="/dashboard" className="section-link">
          <div className="section-card bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-sm">Customize widgets and view essential metrics.</p>
          </div>
        </Link>

        <Link to="/leads" className="section-link">
          <div className="section-card bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-200">
            <h2 className="text-2xl font-semibold">Leads</h2>
            <p className="text-sm">Manage and track all lead details in one place.</p>
          </div>
        </Link>

        <Link to="/analytics" className="section-link">
          <div className="section-card bg-purple-500 text-white p-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-200">
            <h2 className="text-2xl font-semibold">Analytics</h2>
            <p className="text-sm">Explore data visualizations and insights.</p>
          </div>
        </Link>

        <Link to="/reports" className="section-link">
          <div className="section-card bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-200">
            <h2 className="text-2xl font-semibold">Reports</h2>
            <p className="text-sm">Generate detailed reports in PDF and CSV formats.</p>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className="home-footer p-6 text-center text-gray-500">
        <p>Powered by React.js and Chart.js</p>
      </footer>
    </div>
  );
};

export default HomePage;
