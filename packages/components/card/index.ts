import Card from "./src/card.vue";
import { withInstallFunction } from "@molix/utils/install";
export { MlCard };

const MlCard = withInstallFunction(Card, "$card");
