import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/vite";

export default defineConfig({
    plugins: [vue(), vueJsx()],
    test: {
        clearMocks: true,
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    },
});
