import { initializeFormValidation } from './i18n.js';
import { createSSRApp } from "vue";
import App from "./App.vue";
import "./style.css";

createSSRApp(App).mount("#app");

initializeFormValidation();
