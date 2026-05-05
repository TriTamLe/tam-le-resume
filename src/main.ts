import { createApp } from "vue";
import "./app/style.css";
import App from "./App.vue";
import { router } from "./app/router";
import { initializeTheme } from "./entries/theme/hook";
import { i18n } from "./i18n";

initializeTheme();

createApp(App).use(i18n).use(router).mount("#app");
