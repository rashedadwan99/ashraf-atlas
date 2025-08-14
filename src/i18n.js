import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome to Atlas",
      "AddAd": "Add Advertisement",
      "Contact": "Contact Us",
      "Login": "Login",
      "Register": "Register",
      "AdminPanel": "Admin Dashboard"
    }
  },
  ar: {
    translation: {
      "Welcome": "مرحبًا بك في أطلس",
      "AddAd": "إضافة إعلان",
      "Contact": "اتصل بنا",
      "Login": "تسجيل الدخول",
      "Register": "إنشاء حساب",
      "AdminPanel": "لوحة تحكم المدير"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
