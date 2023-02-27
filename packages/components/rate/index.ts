import Rate from "./src/rate.vue";
import { withInstallFunction } from "@molix/utils/install";
export { MlRate };

const MlRate = withInstallFunction(Rate, "$rate");
