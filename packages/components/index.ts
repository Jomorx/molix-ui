import type { App } from "vue";
import { Button } from "./MlButton";
export { Button };
export default {
    install(app: App) {
        app.component(Button.name, Button);
    },
};
