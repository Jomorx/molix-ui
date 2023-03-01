import Input from "../src/input.vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect, vi } from "vitest";
import { ref } from "vue";
import { useNamespace } from "@molix/hooks";

const nsInput = useNamespace("input");
describe("Input.vue", () => {
    test("create", async () => {
        const input = ref("input");
        // 创建模拟函数
        const handleFocus = vi.fn();
        // 传入focus回调记录调用
        const wrapper = mount(() => (
            <Input placeholder={"输入一下"} onFocus={handleFocus} v-model={input.value}></Input>
        ));
        // 获取组件内部 input 元素
        const inputEl = wrapper.find<HTMLInputElement>("input");
        const nativeInput = inputEl.element;
        // 触发 focus 事件
        await inputEl.trigger("focus");
        // 组件是否挂载
        expect(inputEl.exists()).toBe(true);
        // 回调是否调用
        expect(handleFocus).toHaveBeenCalled();
        expect(nativeInput.placeholder).toMatchInlineSnapshot(`"输入一下"`);
        expect(input.value).toMatchInlineSnapshot(`"input"`);
    });

    test("disable", () => {
        const wrapper = mount(() => <Input disabled></Input>);
        const inputElm = wrapper.find("input");
        expect(inputElm.element.disabled).not.toBeNull();
    });

    test("clearable", () => {
        const input = ref("123");
        const wrapper = mount(() => <Input v-model={input.value} clearable></Input>);
        const clearICon = wrapper.find(`.${nsInput.element("icon")}`);
        expect(clearICon.exists()).toBe(true);
        clearICon.trigger("click");
        expect(input.value).toMatchInlineSnapshot(`""`);
    });

    test("show-password", async () => {
        const input = ref("123");
        const wrapper = mount(() => <Input v-model={input.value} show-password></Input>);
        const inputEl = wrapper.find("input").element;
        const switchICon = wrapper.find(`.${nsInput.element("icon")}`);
        expect(switchICon.exists()).toBe(true);
        expect(inputEl.type).toMatchInlineSnapshot(`"password"`);
        await switchICon.trigger("click");
        expect(inputEl.type).toMatchInlineSnapshot(`"text"`);
    });

    test("max-length", async () => {
        const input = ref("111111111111111");
        const wrapper = mount(() => (
            <Input v-model={input.value} maxlength={15} show-word-limit></Input>
        ));
        const inputEl = wrapper.find("input");
        await inputEl.trigger("input", {
            key: "1",
        });
        const count = wrapper.find(`.${nsInput.element("count-inner")}`);
        expect(count.exists()).toBe(true);
        expect(count.text()).toMatchInlineSnapshot(`"15 / 15"`);
    });
});
