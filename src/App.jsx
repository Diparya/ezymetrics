// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content p-4 flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
