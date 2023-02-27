import Rate from "./src/rate.vue";
import { withInstallFunction } from "@molix/utils/install";
export { Rate, MlRate };
// export default {
//     install(app: App) {
//         app.component(Rate.name, Rate);
//     },
// };
const MlRate = withInstallFunction(Rate, "$rate");
