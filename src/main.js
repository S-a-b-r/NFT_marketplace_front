import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import router from "@/router/router";
import components from "@/components/UI/index";

const app = createApp(App);

components.forEach((component) => {
    console.log(component);

    app.component(component.name, component);
});

app.use(router).mount("#app");
