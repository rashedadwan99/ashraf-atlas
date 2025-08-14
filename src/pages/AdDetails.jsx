import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

export default function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => { API.get(`/ads/${id}`).then(res => setAd(res.data)); }, [id]);

  if (!ad) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{ad.title}</h1>
      <p>{ad.description}</p>
      <div className="flex gap-2">{ad.images.map((img, i) => <img key={i} src={img} className="w-48" />)}</div>
    </div>
  );
}
