// Core Vue imports
import { createApp } from "vue";
import { createPinia } from "pinia";

// UI Framework imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// Local imports
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Create Vue application instance
const app = createApp(App);

// Register plugins
app.use(createPinia());
app.use(router);

// Mount the app to the DOM
app.mount("#app");
