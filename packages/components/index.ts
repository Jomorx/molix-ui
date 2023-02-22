import type { App } from "vue";
import { Button } from "./button";
import { Input } from "./input";
import { Alert } from "./alert";
const components = [Button, Input, Alert];
export default {
    install(app: App) {
        components.forEach((component) => {
            app.component(component.name, component);
        });
    },
};
