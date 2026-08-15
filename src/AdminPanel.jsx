import React, { useState } from 'react';
import { Users, Globe2, Settings, ShieldAlert, Edit2, Trash2, Activity, Zap, TrendingUp, Cpu, Download } from 'lucide-react';

export default function AdminPanel() {
  const [co2Cost, setCo2Cost] = useState(85);
  
  const mockUsers = [
    { id: 1, company: 'DHL Global Forwarding', status: 'Active', routes: 142, impact: '+24%' },
    { id: 2, company: 'Maersk Logistics', status: 'Active', routes: 89, impact: '+18%' },
    { id: 3, company: 'DB Schenker', status: 'Pending', routes: 0, impact: '0%' },
    { id: 4, company: 'Kuehne + Nagel', status: 'Active', routes: 215, impact: '+32%' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-8 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="text-slate-700 w-6 h-6" />
              Administration
            </h1>
            <p className="text-slate-500 text-sm mt-1">Manage network operations and algorithmic routing rules.</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-md text-sm font-medium transition">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Networks', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
            { label: 'CO2 Mitigated', value: '4,280 t', icon: Globe2, color: 'text-green-600', bg: 'bg-green-100' },
            { label: 'Engine Load', value: '94%', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100' },
            { label: 'Core Version', value: 'v2.1.0', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-100' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-4">
              <div className={`p-3 rounded-md ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Users Table */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-800">Partner Operations</h2>
              <button className="text-sm text-brandGreen font-medium hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-5 font-medium text-xs uppercase text-slate-500">Partner Entity</th>
                    <th className="py-3 px-5 font-medium text-xs uppercase text-slate-500">Status</th>
                    <th className="py-3 px-5 font-medium text-xs uppercase text-slate-500">Active Routes</th>
                    <th className="py-3 px-5 font-medium text-xs uppercase text-slate-500">Eco Impact</th>
                    <th className="py-3 px-5 font-medium text-xs uppercase text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mockUsers.map(user => (
                    <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-medium text-slate-900 text-sm">{user.company}</td>
                      <td className="py-3 px-5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-5 text-slate-600 text-sm">{user.routes}</td>
                      <td className="py-3 px-5 text-brandGreen font-medium text-sm">{user.impact}</td>
                      <td className="py-3 px-5 text-right flex justify-end gap-2">
                        <button className="text-slate-400 hover:text-blue-600 transition"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-slate-400 hover:text-red-600 transition"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Algorithm Settings */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col">
            <div className="p-5 border-b border-slate-200 bg-slate-50/50">
              <h2 className="text-base font-semibold text-slate-800">Routing Heuristics</h2>
            </div>
            
            <div className="p-5 flex-1 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-slate-700">Carbon Tax Multiplier</label>
                  <span className="text-sm font-semibold text-slate-900">€{co2Cost} / ton</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="150" 
                  value={co2Cost} 
                  onChange={(e) => setCo2Cost(e.target.value)} 
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brandGreen"
                />
                <p className="text-xs text-slate-500 mt-2">Adjusts the pathfinding penalty for high-emission transport nodes.</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-start justify-between">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Enforce Rail Priority</label>
                    <p className="text-xs text-slate-500 mt-1">Strictly prefer railway networks when calculating multimodal paths.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brandGreen"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-200 bg-slate-50/50">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-md text-sm font-medium transition">
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
