import Alert from "./src/alert.vue";
import "./style";
import { withInstallFunction } from "../../utils/install";
export { Alert, MlAlert };
// export default {
//     install(app: App) {
//         app.component(Alert.name, Alert);
//     },
// };
const MlAlert = withInstallFunction(Alert, "$alert");
