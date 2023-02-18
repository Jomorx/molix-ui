import type { App } from "vue";
import { Button } from "./Button";
export { Button };
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
