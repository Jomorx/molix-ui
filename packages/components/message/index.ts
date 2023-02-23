import Message from "./src/message.vue";
import { App } from "vue";
export { Message };
export default {
    install(app: App) {
        app.component(Message.name, Message);
    },
};
