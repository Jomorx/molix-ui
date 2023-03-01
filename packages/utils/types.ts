import { isArray, isObject, isString } from "lodash-es";
import { isNil } from "lodash-es";

export { isArray, isFunction, isObject, isString, isDate, isSymbol } from "lodash-es";
export { isBoolean, isNumber } from "@vueuse/core";
export { isVNode } from "vue";

export const isUndefined = (val: any): val is undefined => val === undefined;

export const isEmpty = (val: unknown) =>
    (!val && val !== 0) ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length);

export const isElement = (e: unknown): e is Element => {
    if (typeof Element === "undefined") return false;
    return e instanceof Element;
};

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
    return isNil(prop);
};

export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
        return false;
    }
    return !Number.isNaN(Number(val));
};
