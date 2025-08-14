import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import CountrySelector from "./CountrySelector";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">Atlas</Link>
      <div className="flex gap-4">
        <Link to="/">{t("home")}</Link>
        <Link to="/add">{t("addAd")}</Link>
        <Link to="/contact">{t("contact")}</Link>
        <Link to="/admin">{t("admin")}</Link>
        <Link to="/login">{t("login")}</Link>
        <LanguageSwitcher />
        <CountrySelector />
      </div>
    </nav>
  );
}
