import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("https://atlasacacia.com/api/ads")
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {ads.map((ad) => (
        <Link
          to={`/ad/${ad._id}`}
          key={ad._id}
          className="border rounded p-4 shadow hover:shadow-lg transition"
        >
          {ad.image && (
            <img
              src={`https://atlasacacia.com/uploads/${ad.image}`}
              alt={ad.title}
              className="w-full h-40 object-cover rounded"
            />
          )}
          <h3 className="text-xl font-bold mt-2">{ad.title}</h3>
          <p className="truncate">{ad.description}</p>
          <p className="text-green-600 font-bold">${ad.price}</p>
        </Link>
      ))}
    </div>
  );
}
