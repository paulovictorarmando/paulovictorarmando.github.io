import { createI18n } from "vue-i18n";
import { messages } from "./locales/messages";

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || "pt",
  fallbackLocale: "pt",
  messages,
});

export default i18n;
