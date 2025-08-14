import { useState } from "react";

export default function Footer() {
  const [country, setCountry] = useState("Jordan");
  const [language, setLanguage] = useState("en");

  const countries = ["Jordan", "Egypt", "France", "Turkey", "Lebanon", "Iraq", "Qatar", "USA"];
  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Country Selector */}
        <div>
          <label htmlFor="country" className="mr-2">Country:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 rounded text-black"
          >
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Contact & Language */}
        <div className="space-x-4 flex items-center">
          <a href="/contact" className="hover:underline">
            {language === "en" ? "Contact Us" : "اتصل بنا"}
          </a>
          <button onClick={toggleLanguage} className="bg-blue-600 px-3 py-1 rounded">
            {language === "en" ? "AR" : "EN"}
          </button>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Atlas Marketplace. All Rights Reserved.
      </div>
    </footer>
  );
}
