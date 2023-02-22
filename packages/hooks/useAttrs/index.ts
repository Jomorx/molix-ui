import { fromPairs } from "lodash";
import { ComputedRef, computed, getCurrentInstance } from "vue";

// 默认过滤class 和 style
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
// 事件监听前缀
const LISTENER_PREFIX = /^on[A-Z]/;

interface Params {
    // 是否过滤监听器
    excludeListeners?: boolean;
    // 要去除的keys
    excludeKeys?: ComputedRef<string[]>;
}

export const useAttrs = (params: Params = {}): ComputedRef<Record<string, unknown>> => {
    const { excludeListeners = false, excludeKeys } = params;
    // 传入的参数与默认合并
    const allExcludeKeys = computed<string[]>(() =>
        (excludeKeys?.value || []).concat(DEFAULT_EXCLUDE_KEYS)
    );
    // 判断是否有组件实例
    const instance = getCurrentInstance();
    if (!instance) {
        console.warn("instance is null, useAttrs must be called at the top of setup function");
        return computed(() => ({}));
    }

    const instanceAttrs = instance.proxy?.$attrs;

    // 过滤allExcludeKeys中的attrs，若过滤监听器则过滤监听器
    return computed(() => {
        return Object.fromEntries(
            Object.entries(instanceAttrs!).filter(
                ([key]) =>
                    !allExcludeKeys.value.includes(key) &&
                    !(excludeListeners && LISTENER_PREFIX.test(key))
            )
        );
    });
};
