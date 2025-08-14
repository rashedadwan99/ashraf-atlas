import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [language, setLanguage] = useState("en"); // default English

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Atlas</Link>
      <div className="space-x-4">
        <Link to="/add-ad" className="bg-green-500 px-3 py-1 rounded">
          {language === "en" ? "Post Ad" : "أضف إعلان"}
        </Link>
        <button
          onClick={toggleLanguage}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          {language === "en" ? "AR" : "EN"}
        </button>
      </div>
    </nav>
  );
}
