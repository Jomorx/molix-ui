import { defineConfig } from "vite";
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    server: {
        port: 1999,
    },
    resolve: {
        alias: {
            "components": path.resolve(__dirname,"../packages/components"),
            "theme": path.resolve(__dirname,"../packages/theme"),
        },
    },
});
