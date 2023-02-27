import { shallowReactive } from "vue";
import type { ComponentInternalInstance, VNode } from "vue";
import type { MessageHandler } from "./message";
import type { IMessageProps } from "./message.vue";
export type MessageContext = {
    id: string;
    vnode: VNode;
    handler: MessageHandler;
    vm: ComponentInternalInstance;
    props: IMessageProps;
};
export const instances: MessageContext[] = shallowReactive([]);
//拿到当前和原来的instance
export const getInstance = (id: string) => {
    const idx = instances.findIndex((instance) => instance.id === id);
    const current = instances[idx];
    let prev: MessageContext | undefined;
    if (idx > 0) {
        prev = instances[idx - 1];
    }
    return { current, prev };
};
// 获取上一个的高度
export const getLastOffset = (id: string): number => {
    const { prev } = getInstance(id);
    if (!prev) return 0;
    return prev.vm.exposed!.bottom.value;
};
// 拿到当前的id
export const getOffsetOrSpace = (id: string, offset: number) => {
    const idx = instances.findIndex((instance) => instance.id === id);
    return idx > 0 ? 20 : offset;
};
export const messageTypes = ["primary", "error", "info", "success", "warning", "default"] as const;
