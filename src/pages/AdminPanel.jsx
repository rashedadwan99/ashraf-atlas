import { useEffect, useState } from "react";
import API from "../api";

export default function AdminPanel() {
  const [stats, setStats] = useState({ users: 0, ads: 0, purchases: 0 });

  useEffect(() => {
    API.get("/admin/stats")
      .then(res => setStats(res.data))
      .catch(() => alert("Failed to load admin stats"));
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-3xl">{stats.users}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Ads</h2>
          <p className="text-3xl">{stats.ads}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Purchases</h2>
          <p className="text-3xl">{stats.purchases}</p>
        </div>
      </div>
    </div>
  );
}
