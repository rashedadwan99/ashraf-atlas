import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AdDetails() {
  const { id } = useParams();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/ads/${id}`)
      .then((res) => res.json())
      .then((data) => setAd(data));
  }, [id]);

  if (!ad) return <p className="text-center mt-10">Loading ad details...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded shadow">
      {ad.image && (
        <img
          src={`http://localhost:5000/uploads/${ad.image}`}
          alt={ad.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-3xl font-bold mb-2">{ad.title}</h2>
      <p className="text-green-600 text-xl font-semibold mb-4">${ad.price}</p>
      <p className="mb-4">{ad.description}</p>
      <p className="text-gray-500">Category: {ad.category}</p>
      <p className="text-gray-500">Location: {ad.location}</p>
      <p className="text-sm text-gray-400 mt-4">Posted on: {new Date(ad.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
