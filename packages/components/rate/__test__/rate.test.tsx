import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Rate from "../src/rate.vue";

import { useNamespace } from "@molix/hooks";
import { ref } from "vue";
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

    // size 设置测试

    it("size", async () => {
        const wrapper = mount(() => <Rate size="large"></Rate>);
        expect(wrapper.find(`.${nsRate.modifier("large")}`).exists()).toBe(true);
        await wrapper.setProps({ size: "" });
        expect(wrapper.find(`.${nsRate.block()}`).exists()).toBe(true);
    });

    // allow half
    it("allow half", () => {
        const value = ref(0);
        const wrapper = mount(() => <Rate v-model={value.value} allowHalf></Rate>);
        const firstStar = wrapper.findAll(`.${nsRate.element("item")}`)[0].element as HTMLElement;
        // 获取组件实例
        const vm = wrapper.getComponent(Rate).vm;
        // 调用组件方法，模拟在第一颗星星最左边的hover
        vm.setCurrentValue(1, {
            target: firstStar,
            offsetX: 0,
        } as unknown as MouseEvent);
        // 确认value
        firstStar.click();
        // 允许半星则是0.5
        expect(value.value).toEqual(0.5);
    });

    // clearable
    it("clearable", () => {
        const value = ref(0);
        const wrapper = mount(() => <Rate v-model={value.value} clearable></Rate>);
        const firstStar = wrapper.findAll(`.${nsRate.element("item")}`)[0].element as HTMLElement;
        const vm = wrapper.getComponent(Rate).vm;
        vm.setCurrentValue(1, {
            target: firstStar,
            offsetX: 0,
        } as unknown as MouseEvent);
        firstStar.click();
        expect(value.value).toBe(1);
        firstStar.click();
        expect(value.value).toBe(0);
    });

    // show-score
    it("show-score", () => {
        const value = ref(0);
        const wrapper = mount(() => <Rate v-model={value.value} show-score></Rate>);
        // 存在分数展示
        expect(wrapper.find(`.${nsRate.element("score")}`).exists()).toBeTruthy();
        const firstStar = wrapper.findAll(`.${nsRate.element("item")}`)[0].element as HTMLElement;
        const vm = wrapper.getComponent(Rate).vm;
        vm.setCurrentValue(1, {
            target: firstStar,
            offsetX: 0,
        } as unknown as MouseEvent);
        firstStar.click();
        expect(value.value).toBe(1);
        // expect(wrapper.find(`.${nsRate.element("score")}`).text()).toBe("1 星");
    });

    // readonly
    it("readonly", () => {
        const value = ref(8);
        const wrapper = mount(() => <Rate max={10} v-model={value.value} readonly></Rate>);
        expect(value.value).toBe(8);
        const firstStar = wrapper.findAll(`.${nsRate.element("item")}`)[0].element as HTMLElement;
        const vm = wrapper.getComponent(Rate).vm;
        vm.setCurrentValue(1, {
            target: firstStar,
            offsetX: 0,
        } as unknown as MouseEvent);
        firstStar.click();
        expect(value.value).toBe(8);
    });
});
