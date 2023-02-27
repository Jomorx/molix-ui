import Message from "./src/method";
import "./style";
import { withInstallFunction } from "@molix/utils/install";
export { MlMessage };

const MlMessage = withInstallFunction(Message, "$message");
