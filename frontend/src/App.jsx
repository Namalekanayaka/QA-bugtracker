import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-blue-600 p-4 text-white">
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/report">Report Bug</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
