import type { App, Component } from "vue";
import "../theme/src/icons/iconfont.css";
import "../theme/src/index.scss";
import "../theme/src/icons/iconfont.js";
import { MlButton } from "./button";
import { MlInput } from "./input";
import { MlAlert } from "./alert";
import { MlRate } from "./rate";
import { MlMessage } from "./message";
import { MlCard } from "./card";
const components = [MlButton, MlInput, MlAlert, MlRate, MlMessage, MlCard];
export default {
    install(app: App) {
        components.forEach((component) => {
            app.component(component.name, component as Component);
        });
    },
};

export * from "./alert";
export * from "./button";
export * from "./card";
export * from "./input";
export * from "./message";
export * from "./rate";
