import Button from "./src/button.vue";
import { withInstallFunction } from "@molix/utils/install";
export { Button, MlButton };
// export default {
//     install(app: App) {
//         app.component(Button.name, Button);
//     },
// };
const MlButton = withInstallFunction(Button, "$button");
