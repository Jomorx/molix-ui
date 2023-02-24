import type { App } from "vue";
import "../theme/src/icons/iconfont.css";
import "../theme/src/index.scss";
import "../theme/src/icons/iconfont.js";
import { Button } from "./button";
import { Input } from "./input";
import { Alert } from "./alert";
import { Rate } from "./rate";
import { Message } from "./message";

const components = [Button, Input, Alert, Rate, Message];
export default {
    install(app: App) {
        components.forEach((component) => {
            app.component(component.name, component);
        });
    },
};
