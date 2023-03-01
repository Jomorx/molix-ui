import DefaultTheme from "vitepress/theme";

import MolixUi from "molix";
import "./styles/vars.css";

import theme from "vitepress/dist/client/theme-default/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

export default {
    ...theme,
    enhanceApp({ app }) {
        console.log(MolixUi);

        app.use(MolixUi);
        app.component("demo-preview", AntDesignContainer);
    },
};
