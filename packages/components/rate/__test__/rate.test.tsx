import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Rate from "../src/rate.vue";
import { useNamespace } from "@molix/hooks";
import { ref } from "vue";
import { MolixError } from "../../../utils/error";
const nsRate = useNamespace("rate");
describe("Rate.vue", () => {
    // max渲染测试
    it("create with max stars", () => {
        const wrapper = mount(Rate, {
            props: {
                max: 10,
            },
        });
        const stars = wrapper.findAll(`.${nsRate.element("item")}`);
        expect(stars.length).toBe(10);
    });

    // unWarn测试
    it("disable unWarn", () => {
        const value = ref(12);
        const wrapper = mount(() => <Rate v-model={value.value} max={10}></Rate>);
        const stars = wrapper.findAll(`.${nsRate.element("item")}`);
        expect(value.value).toBe(10);
        expect(stars.length).toBe(10);
    });

    it("enable unWarn", () => {
        const value = ref(12);
        const wrapper = mount(() => <Rate v-model={value.value} max={10} unWarn></Rate>);
        const stars = wrapper.findAll(`.${nsRate.element("item")}`);
        expect(value.value).toBe(12);
        expect(stars.length).toBe(10);
    });
});
