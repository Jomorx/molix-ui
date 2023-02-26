import Input from "./src/input.vue";
import { withInstallFunction } from "@molix/utils/install";
export { Input, MlInput };
// export default {
//     install(app: App) {
//         app.component(Input.name, Input);
//     },
// };
const MlInput = withInstallFunction(Input, "$input");
