import type { App } from "vue";

import { Button } from "./button";
import { Input } from "./input";

import "../theme/src/icons/iconfont.css";
export { Button };
export default {
    install(app: App) {
        app.component(Button.name, Button);
        app.component(Input.name, Input);
    },
};
