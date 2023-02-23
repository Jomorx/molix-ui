import { isObject } from "lodash";
import { CSSProperties, camelize } from "vue";
export const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
export const hasClass = (el: Element, cls: string): boolean => {
    if (!el || !cls) return false;
    if (cls.includes(" ")) throw new Error("className should not contain space.");
    return el.classList.contains(cls);
};
export const addClass = (el: Element, cls: string) => {
    if (!el || !cls.trim()) return;
    el.classList.add(...classNameToArray(cls));
};

export const removeClass = (el: Element, cls: string) => {
    if (!el || !cls.trim()) return;
    el.classList.remove(...classNameToArray(cls));
};
export const setStyle = (
    element: HTMLElement,
    styleName: CSSProperties | keyof CSSProperties,
    value?: string | number
) => {
    if (!element || !styleName) return;

    if (isObject(styleName)) {
        Object.entries(styleName).forEach(([prop, value]) =>
            setStyle(element, prop as keyof CSSProperties, value)
        );
    } else {
        const key: any = camelize(styleName);
        element.style[key] = value as any;
    }
};
export const getStyle = (element: HTMLElement, styleName: keyof CSSProperties): string => {
    let key = camelize(styleName);
    if (key === "float") key = "cssFloat";
    try {
        const style = (element.style as any)[key];
        if (style) return style;
        const computed: any = document.defaultView?.getComputedStyle(element, "");
        return computed ? computed[key] : "";
    } catch {
        return (element.style as any)[key];
    }
};

export const getCssVarName = (name: string) => `var(${name})`;
