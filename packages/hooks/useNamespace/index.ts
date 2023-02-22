export const defaultNamespace = "ml";
const statePrefix = "is-";
export const useNamespace = (blockName: string) => {
    // 生成字符串形如 ml-${block}
    const block = (blockSuffix = "") => _bem(defaultNamespace, blockName, blockSuffix, "", "");
    const element = (el?: string) => (el ? _bem(defaultNamespace, blockName, "", el, "") : "");

    const modifier = (modifier?: string) =>
        modifier ? _bem(defaultNamespace, blockName, "", "", modifier) : "";

    const is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        console.log(name, state);
        return name && state ? `${statePrefix}${name}` : "";
    };
    return {
        block,
        element,
        is,
        modifier,
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
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};
export type UseNamespaceReturn = ReturnType<typeof useNamespace>;
