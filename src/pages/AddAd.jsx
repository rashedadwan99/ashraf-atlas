import { useState } from "react";
import API from "../api";

export default function AddAd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    for (let i = 0; i < images.length; i++) formData.append("images", images[i]);
    await API.post("/ads", formData);
    alert("Ad created!");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" className="border p-2 w-full" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" className="border p-2 w-full my-2" onChange={(e) => setDescription(e.target.value)}></textarea>
      <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
      <button type="submit" className="bg-blue-700 text-white p-2 mt-2">Post Ad</button>
    </form>
  );
}
