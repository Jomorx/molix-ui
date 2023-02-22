import type { App } from "vue";

import { Button } from "./button";
import { Input } from "./input";

import "../theme/src/icons/iconfont.css";
export { Button };
import { Alert } from "./alert";
const components = [Button, Input, Alert];
export default {
    install(app: App) {
        components.forEach((component) => {
            app.component(component.name, component);
        });
    },
};
