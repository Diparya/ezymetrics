import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white p-7 transition-transform duration-300 transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:block`}
      >
        <h1 className="font-bold text-3xl mb-6">Home</h1>
        <nav className="flex flex-col space-y-6">
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/leads" onClick={() => setIsOpen(false)}>Leads</Link>
          <Link to="/analytics" onClick={() => setIsOpen(false)}>Analytics</Link>
          <Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link>
        </nav>
      </div>

      {/* Toggle Button for Sidebar */}
      <button
        className="text-white p-3 md:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

    </div>
  );
}
