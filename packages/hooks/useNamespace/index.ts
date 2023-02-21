export const defaultNamespace = "ml";
const statePrefix = "is-";
export const useNamespace = (block: string) => {
    // 生成字符串形如 ml-${block}-${blockSuffix}
    const b = (blockSuffix = "") => _bem(defaultNamespace, block, blockSuffix, "", "");
    return {
        b,
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
