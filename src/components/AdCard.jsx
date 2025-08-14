import React from "react";

export default function AdCard({ ad }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-3">
      <img
        src={`https://atlasacacia.com/uploads/${ad.image || "placeholder.jpg"}`}
        alt={ad.title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-lg">{ad.title}</h3>
      <p className="text-gray-600 text-sm">{ad.category}</p>
      <p className="text-blue-700 font-bold mt-1">${ad.price}</p>
    </div>
  );
}
