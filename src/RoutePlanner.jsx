import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, MapPin, Truck, Train, Ship } from 'lucide-react';

export default function RoutePlanner() {
  const [route, setRoute] = useState(null);

  const calculateRoute = (e) => {
    e.preventDefault();
    // Mock routing options
    setRoute([
      {
        id: 'opt1',
        name: 'Eco-Optimal (Train + Truck)',
        co2: '1.2t',
        time: '3.5 Days',
        cost: '€1200',
        segments: [
          { type: 'truck', path: [[51.505, -0.09], [48.8566, 2.3522]] },
          { type: 'train', path: [[48.8566, 2.3522], [52.52, 13.405]] }
        ]
      },
      {
        id: 'opt2',
        name: 'Fastest (Direct Truck)',
        co2: '3.8t',
        time: '2.1 Days',
        cost: '€1800',
        segments: [
          { type: 'truck', path: [[51.505, -0.09], [52.52, 13.405]] }
        ]
      }
    ]);
  };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-slate-100 overflow-y-auto">
        <h2 className="text-2xl font-bold text-brandDark mb-6">Plan Route</h2>
        <form onSubmit={calculateRoute} className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1">Origin</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <input type="text" placeholder="e.g., London, UK" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:border-transparent outline-none" defaultValue="London, UK" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
              <input type="text" placeholder="e.g., Berlin, DE" className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:border-transparent outline-none" defaultValue="Berlin, DE" />
            </div>
          </div>
          <button type="submit" className="w-full bg-brandGreen text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Find Best Routes
          </button>
        </form>

        {route && (
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Available Routes</h3>
            {route.map(r => (
              <div key={r.id} className="p-4 border border-slate-200 rounded-lg mb-4 hover:border-brandGreen cursor-pointer transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-brandDark">{r.name}</h4>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Score: 98</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-slate-600 mb-3">
                  <div><span className="block text-xs text-slate-400">CO2</span>{r.co2}</div>
                  <div><span className="block text-xs text-slate-400">Time</span>{r.time}</div>
                  <div><span className="block text-xs text-slate-400">Cost</span>{r.cost}</div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  {r.segments.map((s, idx) => (
                    <React.Fragment key={idx}>
                      {s.type === 'truck' && <Truck className="w-4 h-4" />}
                      {s.type === 'train' && <Train className="w-4 h-4" />}
                      {s.type === 'ship' && <Ship className="w-4 h-4" />}
                      {idx < r.segments.length - 1 && <span>→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Map */}
      <div className="w-full md:w-2/3 bg-slate-200 rounded-lg overflow-hidden border border-slate-300 relative z-0">
        <MapContainer center={[50.5, 4.5]} zoom={5} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          />
          {route && route[0].segments.map((segment, idx) => (
            <Polyline 
              key={idx} 
              positions={segment.path} 
              color={segment.type === 'train' ? '#16a34a' : '#ef4444'} 
              weight={4}
              dashArray={segment.type === 'train' ? '5, 10' : ''}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
