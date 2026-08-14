import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Leaf, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const data = [
  { name: 'Jan', co2: 4000, eco: 2400 },
  { name: 'Feb', co2: 3000, eco: 1398 },
  { name: 'Mar', co2: 2000, eco: 9800 },
  { name: 'Apr', co2: 2780, eco: 3908 },
  { name: 'May', co2: 1890, eco: 4800 },
  { name: 'Jun', co2: 2390, eco: 3800 },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-brandDark mb-6">EcoFreight Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="text-brandGreen w-6 h-6" />
            <h3 className="text-slate-500 font-medium">CO2 Saved (YTD)</h3>
          </div>
          <p className="text-3xl font-bold text-brandDark">124.5 t</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="text-blue-500 w-6 h-6" />
            <h3 className="text-slate-500 font-medium">Cost Reduction</h3>
          </div>
          <p className="text-3xl font-bold text-brandDark">14.2%</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-orange-500 w-6 h-6" />
            <h3 className="text-slate-500 font-medium">Avg Transit Time</h3>
          </div>
          <p className="text-3xl font-bold text-brandDark">4.2 Days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-purple-500 w-6 h-6" />
            <h3 className="text-slate-500 font-medium">ESG Compliance</h3>
          </div>
          <p className="text-3xl font-bold text-brandDark">98/100</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-8">
        <h2 className="text-xl font-bold text-brandDark mb-4">Emissions Overview: Standard vs EcoFreight</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="co2" name="Standard Route CO2" fill="#94a3b8" />
              <Bar dataKey="eco" name="EcoFreight Route CO2" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
