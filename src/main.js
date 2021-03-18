import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {registerGlobalComponents} from "@/resumes/resumes";

const app = createApp(App);

app.use(store);
app.use(router);

registerGlobalComponents(app);

app.mount("#app");
