import { useNamespace } from "@molix/hooks";
import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import Button from "../src/button.vue";
const nsBtn = useNamespace("button");
const MORX = "just for fun";
describe("Button.vue", () => {
    it("create", () => {
        const btn = mount(() => <Button type="primary" />);
        expect(btn.classes()).toContain(nsBtn.element("btn"));
    });

    it("nativeType", () => {
        const btn = mount(() => <Button nativeType="submit" />);
        expect(btn.attributes("type")).toBe("submit");
    });

    it("round", () => {
        const btn = mount(() => <Button round />);
        expect(btn.classes()).toContain("is-round");
    });

    it("disabled", async () => {
        const btn = mount(() => <Button disabled />);
        expect(btn.classes()).toContain("is-disabled");
        expect(btn.attributes("disabled")).toBe("");
        await btn.trigger("click");
        expect(btn.emitted("click")).toBeUndefined();
    });

    it("fall", () => {
        const btn = mount(() => <Button fall />);
        const wrapper = btn.find(`.${nsBtn.element("wrapper")}`);
        expect(wrapper.classes()).toContain("is-fall");
    });

    it("type", () => {
        const btn = mount(() => <Button type="error" />);
        const wrapper = btn.find(`.${nsBtn.element("wrapper")}`);
        expect(wrapper.classes()).toContain(nsBtn.modifier("error"));
    });

    it("size", () => {
        const btn = mount(() => <Button size="large" />);
        const wrapper = btn.find(`.${nsBtn.element("wrapper")}`);
        expect(wrapper.classes()).toContain(nsBtn.modifier("large"));
    });
    test("render text", () => {
        const wrapper = mount(() => (
            <Button
                v-slots={{
                    default: () => MORX,
                }}
            />
        ));

        expect(wrapper.text()).toEqual(MORX);
    });
    test("handle click", async () => {
        const wrapper = mount(() => (
            <Button
                v-slots={{
                    default: () => MORX,
                }}
            />
        ));

        await wrapper.trigger("click");
        const waveDiv = wrapper.find(`.${nsBtn.element("wave")}`);
        expect(waveDiv.classes()).toContain(nsBtn.is(`primary-wave-active`, true));
        expect(wrapper.emitted()).toBeDefined();
    });
});
