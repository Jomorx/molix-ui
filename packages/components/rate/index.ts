import Rate from "./src/rate.vue";
import { App } from "vue";
export { Rate };
export default {
    install(app: App) {
        app.component(Rate.name, Rate);
    },
};
