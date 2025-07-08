import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import {
  LineChart,
  PieChart,
  Users,
  DollarSign,
  Activity,
  ArrowLeft,
} from "lucide-react";
import {
  Line,
  Bar,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
];
const pieData = [
  { name: "Organic", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Direct", value: 300 },
  { name: "Social", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AnalyticsDashboard() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800/50 p-4 border-r border-white/10 hidden md:block">
          <Link
            to={createPageUrl("Portfolio")}
            className="flex items-center gap-2 text-xl font-bold mb-10 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Dashboard</span>
          </Link>
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-500/20 text-blue-300"
            >
              <LineChart size={20} /> Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Users size={20} /> Audience
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <DollarSign size={20} /> Revenue
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <Activity size={20} /> Real-time
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8">Analytics Overview</h1>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-slate-400">Total Users</h3>
              <p className="text-3xl font-bold">10,293</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-slate-400">Revenue</h3>
              <p className="text-3xl font-bold">$48,392</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-slate-400">Conversion Rate</h3>
              <p className="text-3xl font-bold">3.4%</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-slate-400">Avg. Session</h3>
              <p className="text-3xl font-bold">3m 12s</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold mb-4">User Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Legend />
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="font-bold mb-4">Traffic Source</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}           
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
