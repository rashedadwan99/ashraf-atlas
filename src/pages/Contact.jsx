import { useState } from "react";
import API from "../api";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      await API.post("/contact", { email, message });
      alert("Message sent!");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleContact} className="flex flex-col gap-2">
        <input type="email" placeholder="Your Email" className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Your Message" className="border p-2" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" className="bg-blue-700 text-white p-2">Send</button>
      </form>
    </div>
  );
}
