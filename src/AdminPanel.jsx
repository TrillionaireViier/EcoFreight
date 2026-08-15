import React, { useState } from 'react';
import { Users, Globe2, Settings, ShieldAlert, Edit2, Trash2 } from 'lucide-react';

export default function AdminPanel() {
  const [co2Cost, setCo2Cost] = useState(85);
  
  const mockUsers = [
    { id: 1, company: 'DHL Global Forwarding', status: 'Active', routes: 142 },
    { id: 2, company: 'Maersk Logistics', status: 'Active', routes: 89 },
    { id: 3, company: 'DB Schenker', status: 'Pending', routes: 0 },
    { id: 4, company: 'Kuehne + Nagel', status: 'Active', routes: 215 },
  ];

  return (
    <div className="p-6 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-brandDark flex items-center gap-2">
          <ShieldAlert className="text-red-500 w-8 h-8" /> 
          Admin Dashboard
        </h1>
      </div>
      
      {/* Global Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Total Active Companies</p>
            <p className="text-2xl font-bold text-brandDark">24</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-600">
            <Globe2 className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Global CO2 Saved</p>
            <p className="text-2xl font-bold text-brandDark">4,280 t</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600">
            <Settings className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Algorithm Versions</p>
            <p className="text-2xl font-bold text-brandDark">v1.4.2</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Users Table */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-brandDark mb-4">Company Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Company Name</th>
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Status</th>
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Active Routes</th>
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map(user => (
                  <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-3 px-4 text-slate-800 font-medium">{user.company}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{user.routes}</td>
                    <td className="py-3 px-4 text-right flex justify-end gap-2">
                      <button className="text-blue-500 hover:text-blue-700 p-1"><Edit2 className="w-4 h-4" /></button>
                      <button className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Algorithm Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
          <h2 className="text-xl font-bold text-brandDark mb-4">Algorithm Settings</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Carbon Tax Coefficient (€ / ton)
            </label>
            <div className="flex items-center gap-4">
              <input 
                type="range" 
                min="20" 
                max="150" 
                value={co2Cost} 
                onChange={(e) => setCo2Cost(e.target.value)} 
                className="w-full accent-brandGreen"
              />
              <span className="font-bold text-slate-700 w-12">€{co2Cost}</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Adjusting this heavily impacts the "Eco-Optimal" route suggestions.</p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">Enable Rail Priority</label>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-brandGreen rounded border-slate-300 focus:ring-brandGreen" />
              <span className="text-sm text-slate-600">Forces algorithm to prefer train networks over trucks if available.</span>
            </div>
          </div>

          <button className="w-full bg-brandDark text-white py-2 rounded font-medium hover:bg-slate-800 transition">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
