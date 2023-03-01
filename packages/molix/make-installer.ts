// 对外暴露install
import type { App } from "vue";
interface Component {
    name: string;
}
export const makeInstaller = (components: Component[] = []) => {
    const install = (app: App) => {
        components.forEach((c) => {
            app.component(c.name, c);
        });
    };
    return {
        install,
    };
};
