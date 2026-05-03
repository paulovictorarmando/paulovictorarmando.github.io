import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import i18n from "./i18n";
import { useTheme } from "./composables/useTheme";

const app = createApp(App);

// Initialize theme on app startup
useTheme();

app.use(i18n);
app.mount("#app");
