import Button from "./src/button.vue";
import { withInstallFunction } from "@molix/utils/install";
export { MlButton };

const MlButton = withInstallFunction(Button, "$button");
