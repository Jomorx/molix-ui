// 创建块 ml-form
// 创建元素 ml-input__inner
// 创建块修改器 ml-form--default
// 创建块后缀元素 ml-form-item
// 创建元素修改器 ml-scrollbar__wrap--hidden-default
// 创建动作状态 例如：is-success is-required

export const defaultNamespace = "ml";
const statePrefix = "is-";
export const useNamespace = (blockName: string) => {
    // 生成块/后缀快
    const block = (blockSuffix = "") => _bem(defaultNamespace, blockName, blockSuffix, "", "");
    // 生成元素
    const element = (el?: string) => (el ? _bem(defaultNamespace, blockName, "", el, "") : "");
    // 生成块修改器
    const modifier = (modifier?: string) =>
        modifier ? _bem(defaultNamespace, blockName, "", "", modifier) : "";
    // 生成后缀块元素 如 ml-form-item__wrapper
    const be = (blockSuffix?: string, element?: string) => {
        blockSuffix && element ? _bem(defaultNamespace, blockName, blockSuffix, "", "") : "";
    };
    // 生成元素修改器 如 ml-input__inner--hidden
    const em = (element?: string, modifier?: string) => {
        element && modifier ? _bem(defaultNamespace, blockName, "", element, modifier) : "";
    };
    // 生成后缀块修改器 如 ml-form-item--hidden
    const bm = (blockSuffix?: string, modifier?: string) => {
        blockSuffix && modifier ? _bem(defaultNamespace, blockName, blockSuffix, "", modifier) : "";
    };
    // 生成后缀块元素修改器 如 ml-form-item__inner--active
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
        blockSuffix && element && modifier
            ? _bem(defaultNamespace, blockName, blockSuffix, element, modifier)
            : "";
    const is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        return name && state ? `${statePrefix}${name}` : "";
    };
    return {
        block,
        element,
        is,
        modifier,
        be,
        em,
        bm,
        bem,
    };
};
const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let cls = `${namespace}-${block}`;
    if (blockSuffix) cls += `-${blockSuffix}`;
    if (element) cls += `__${element}`;
    if (modifier) cls += `--${modifier}`;
    return cls;
};
export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
