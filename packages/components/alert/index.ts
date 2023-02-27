import Alert from "./src/alert.vue";
import "./style";
import { withInstallFunction } from "../../utils/install";
export { MlAlert };

const MlAlert = withInstallFunction(Alert, "$alert");
