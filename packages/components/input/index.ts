import Input from "./src/input.vue";
import { withInstallFunction } from "@molix/utils/install";
export { MlInput };

const MlInput = withInstallFunction(Input, "$input");
