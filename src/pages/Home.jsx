import { useEffect, useState } from "react";
import API from "../api";
import AdCard from "../components/AdCard";

export default function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => { API.get("/ads").then(res => setAds(res.data)); }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {ads.map(ad => <AdCard key={ad._id} ad={ad} />)}
    </div>
  );
}
