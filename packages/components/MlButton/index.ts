import Button from "./MlButton.vue";
import { App } from "vue";
export { Button };
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
