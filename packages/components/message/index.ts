import Message from "./src/method";
import { App } from "vue";
import "./style";
import { withInstallFunction } from "@molix/utils/install";
export { Message, MlMessage };
// export default {
//     install(app: App) {
//         app.component(Message.name, Message);
//     },
// };
const MlMessage = withInstallFunction(Message, "$message");
