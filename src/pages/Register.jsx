import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-2">
        <input type="text" placeholder="Name" className="border p-2" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-700 text-white p-2">Register</button>
      </form>
    </div>
  );
}
