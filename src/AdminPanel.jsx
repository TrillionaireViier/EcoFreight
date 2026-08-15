import React, { useState } from 'react';
import { Users, Globe2, Settings, ShieldAlert, Edit2, Trash2, Activity, Zap, TrendingUp, Cpu } from 'lucide-react';

export default function AdminPanel() {
  const [co2Cost, setCo2Cost] = useState(85);
  
  const mockUsers = [
    { id: 1, company: 'DHL Global Forwarding', status: 'Active', routes: 142, impact: '+24%' },
    { id: 2, company: 'Maersk Logistics', status: 'Active', routes: 89, impact: '+18%' },
    { id: 3, company: 'DB Schenker', status: 'Pending', routes: 0, impact: '0%' },
    { id: 4, company: 'Kuehne + Nagel', status: 'Active', routes: 215, impact: '+32%' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 h-[calc(100vh-64px)] overflow-y-auto relative">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brandPrimary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 flex items-center gap-3 tracking-tight mb-2">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Cpu className="text-brandPrimary w-8 h-8" />
              </div>
              Command Center
            </h1>
            <p className="text-slate-400 font-medium ml-1">Advanced EcoFreight Logistics & Network Administration</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-300 tracking-wide">System Online</span>
          </div>
        </div>
        
        {/* Global Stats - Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Active Networks', value: '24', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
            { label: 'CO2 Mitigated', value: '4,280 t', icon: Globe2, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
            { label: 'Engine Load', value: '94%', icon: Activity, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
            { label: 'Core Version', value: 'v2.1.0-beta', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
          ].map((stat, i) => (
            <div key={i} className={`group relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}>
              <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity ${stat.bg}`} />
              <div className="flex items-center gap-4 relative z-10">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.border} border backdrop-blur-md`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-2xl font-black tracking-tight text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users Table */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brandPrimary/50 to-transparent" />
            
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold tracking-wide flex items-center gap-2">
                <TrendingUp className="text-slate-400 w-5 h-5" /> 
                Partner Operations
              </h2>
              <button className="text-xs bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full font-medium border border-white/5">
                View All Network
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-slate-500">Partner Entity</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-slate-500">Network Status</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-slate-500">Active Routes</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-slate-500">Eco Impact</th>
                    <th className="py-4 px-4 font-bold text-xs uppercase tracking-widest text-slate-500 text-right">Access</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map(user => (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                      <td className="py-4 px-4 font-semibold text-slate-200">{user.company}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full backdrop-blur-sm border ${
                          user.status === 'Active' 
                            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-400 font-medium">{user.routes} <span className="text-xs text-slate-600">ops</span></td>
                      <td className="py-4 px-4 text-brandPrimary font-bold">{user.impact}</td>
                      <td className="py-4 px-4 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Edit2 className="w-4 h-4" /></button>
                        <button className="text-slate-400 hover:text-red-400 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"><Trash2 className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Algorithm Settings */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <h2 className="text-xl font-bold tracking-wide flex items-center gap-2 mb-8">
              <Settings className="text-slate-400 w-5 h-5" /> 
              Routing Heuristics
            </h2>
            
            <div className="space-y-8 flex-1">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block text-sm font-bold text-slate-300">Carbon Tax Multiplier</label>
                  <span className="text-lg font-black text-brandPrimary">€{co2Cost} / ton</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="150" 
                  value={co2Cost} 
                  onChange={(e) => setCo2Cost(e.target.value)} 
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brandPrimary"
                />
                <p className="text-xs text-slate-500 mt-3 font-medium">Aggressively alters the pathfinding algorithm to prioritize low-emission transport nodes.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-bold text-slate-300 mb-1">Enforce Rail Priority</label>
                    <span className="text-xs text-slate-500 font-medium">Strictly prefer railway networks.</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brandPrimary"></div>
                  </label>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full bg-gradient-to-r from-brandPrimary to-blue-600 hover:from-blue-600 hover:to-brandPrimary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
              Deploy Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
