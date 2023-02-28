import Rate from "./src/rate.vue";
import { withInstallFunction } from "@molix/utils/install";
export { MlRate };
export type RateInstance = InstanceType<typeof Rate>;
const MlRate = withInstallFunction(Rate, "$rate");
