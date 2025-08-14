import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="border p-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-700 text-white p-2">Login</button>
      </form>
    </div>
  );
}
