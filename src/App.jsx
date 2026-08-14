import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import RoutePlanner from './RoutePlanner';
import { PackageSearch, LayoutDashboard } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-brandDark text-white h-16 flex items-center px-6 shadow-md z-10 relative">
          <div className="text-xl font-bold tracking-tight text-brandGreen mr-8 flex items-center gap-2">
            <PackageSearch />
            EcoFreight
          </div>
          <nav className="flex gap-6">
            <Link to="/" className="flex items-center gap-2 hover:text-brandGreen transition font-medium">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            <Link to="/planner" className="flex items-center gap-2 hover:text-brandGreen transition font-medium">
              <PackageSearch className="w-4 h-4" /> Route Planner
            </Link>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planner" element={<RoutePlanner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
