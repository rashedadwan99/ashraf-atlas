import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAd() {
  const [form, setForm] = useState({ title: "", description: "", price: "", category: "", location: "" });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/ads", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("Ad posted successfully!");
        navigate("/");
      } else {
        alert("Failed to post ad");
      }
    } catch (err) {
      alert("Error posting ad");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Post a New Ad</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Title" className="w-full p-2 border rounded"
          value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" className="w-full p-2 border rounded"
          value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input type="number" placeholder="Price" className="w-full p-2 border rounded"
          value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input type="text" placeholder="Category" className="w-full p-2 border rounded"
          value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input type="text" placeholder="Location" className="w-full p-2 border rounded"
          value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Post Ad</button>
      </form>
    </div>
  );
}
