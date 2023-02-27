import { useNamespace } from "@molix/hooks";
import { mount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import Alert from "../src/alert.vue";
const nsAlt = useNamespace("alert");
const MORX = "just for fun";
describe("Alert.vue", () => {
    it("create", () => {
        const alt = mount(() => <Alert />);
        expect(alt.classes()).toContain(nsAlt.block());
        expect(alt.classes()).toContain(nsAlt.modifier("default"));
    });
    it("titleSlot", () => {
        const alt = mount(() => <Alert title={MORX} />);
        expect(alt.find(`.${nsAlt.block()}`).text()).toEqual(MORX);
    });
    it("description", () => {
        const alt = mount(() => <Alert description={MORX} />);
        expect(alt.find(`.${nsAlt.element("description")}`).text()).toEqual(MORX);
    });
    it("type", () => {
        const alt = mount(() => <Alert type="error" />);
        expect(alt.find(`.${nsAlt.block()}`).classes()).toContain(nsAlt.modifier("error"));
    });
    it("center", () => {
        const alt = mount(() => <Alert center />);
        expect(alt.find(`.${nsAlt.element("content")}`).classes()).toContain(
            nsAlt.is("center", true)
        );
    });
    it("boldText", () => {
        const alt = mount(() => <Alert isBoldTitle description={MORX} title={MORX} />);
        expect(alt.find(`.${nsAlt.element("title")}`).classes()).toContain(nsAlt.is("bold", true));
    });

    it("closeable", () => {
        const alt = mount(() => <Alert closeable={true} title={MORX} />);
        expect(alt.find(`.${nsAlt.element("close-btn")}`).classes()).toContain(
            nsAlt.is("closeable", true)
        );
    });
    it("customed", () => {
        const alt = mount(() => <Alert closeText="close" title={MORX} />);
        expect(alt.find(`.${nsAlt.element("close-btn")}`).classes()).toContain(
            nsAlt.is("customed", true)
        );
    });

    test("close", async () => {
        const wrapper = mount(() => <Alert closeText={"close"} />);
        const closeBtn = wrapper.find(`.${nsAlt.block()}`);
        expect(closeBtn.exists()).toBe(true);
        await closeBtn.trigger("click");
        expect(wrapper.emitted()).toBeDefined();
    });
});
