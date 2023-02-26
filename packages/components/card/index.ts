import Card from "./src/card.vue";
import { App } from "vue";
import { withInstallFunction } from "@molix/utils/install";
export { Card, MlCard };
// export default {
//     install(app: App) {
//         app.component(Card.name, Card);
//     },
// };
const MlCard = withInstallFunction(Card, "$card");
