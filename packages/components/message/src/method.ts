import {
    Message,
    messageDefaults,
    MessageFn,
    MessageHandler,
    MessageOptions,
    MessageParams,
    MessageParamsNormalized,
    IMessageType,
} from "./message";
import { debugWarn, isElement, isFunction, isNumber, isString, isVNode } from "@molix/utils";
import { instances, MessageContext, messageTypes } from "./instance";
import { AppContext, createElementVNode, createVNode, render } from "vue";
import { useZIndex } from "@molix/hooks";
import MessageConstructor from "./message.vue";

let seed = 1;

const normalizeOptions = (params?: MessageParams) => {
    const options: MessageOptions =
        !params || isString(params) || isVNode(params) || isFunction(params)
            ? { message: params }
            : params;
    //合并
    const normalized = {
        ...messageDefaults,
        ...options,
    };
    //默认to body
    if (!normalized.appendTo) {
        normalized.appendTo = document.body;
    } else if (isString(normalized.appendTo)) {
        let appendTo = document.querySelector<HTMLElement>(normalized.appendTo);

        if (!isElement(appendTo)) {
            debugWarn(
                "MlMessage",
                "appendTo 需要传入一个HTMLElement,如果传入的不是HTMLElement,默认appendTo body"
            );
            appendTo = document.body;
        }

        normalized.appendTo = appendTo;
    }

    return normalized as MessageParamsNormalized;
};
const closeMessage = (instance: MessageContext) => {
    const idx = instances.indexOf(instance);
    if (idx === -1) return;

    instances.splice(idx, 1);
    const { handler } = instance;
    handler.close();
};
const createMessage = (
    { appendTo, ...options }: MessageParamsNormalized,
    context?: AppContext | null
): MessageContext => {
    const { nextZIndex } = useZIndex();

    const id = `message_${seed++}`;
    const userOnClose = options.onBeforeClose;

    const container = document.createElement("div");

    const props = {
        ...options,
        zIndex: nextZIndex() + options.zIndex!,
        id,
        //将用户自定义删除的事件以及删除事件一起执行
        onClose: () => {
            userOnClose?.();
            closeMessage(instance);
        },
        onDestroy: () => {
            render(null, container);
        },
    };
    const vnode = createVNode(
        MessageConstructor,
        props,
        //判断是Function还是vNode 并给出对应处理
        isFunction(props.message) || isVNode(props.message)
            ? {
                  default: isFunction(props.message) ? props.message : () => props.message,
              }
            : null
    );
    //绑定对应的组件上下文
    vnode.appContext = context || message._context;
    // 渲染组件到div上
    render(vnode, container);
    // 将渲染好的组件渲染到body上面
    appendTo.appendChild(container.firstElementChild!);
    //拿到组件实例
    const vm = vnode.component!;

    const handler: MessageHandler = {
        close: () => {
            vm.exposed!.visible.value = false;
        },
    };

    const instance: MessageContext = {
        id,
        vnode,
        vm,
        //{onClose:()=>void}
        handler,
        props: (vnode.component as any).props,
    };

    return instance;
};
const messageConfig = { max: 20 };
const message: MessageFn & Partial<Message> & { _context: AppContext | null } = (
    options = {},
    context
) => {
    //检查max是不是数字 并且 当前的message数量大于max
    if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
        return { close: () => undefined };
    }
    //初始化对应的props
    const normalized = normalizeOptions(options);
    // 创建组件实例
    const instance = createMessage(normalized, context);
    // 将创建好的组件实例加入到数组中
    instances.push(instance);
    return instance.handler;
};
//把数组中中的所有的实例
export function closeAll(type?: IMessageType): void {
    for (const instance of instances) {
        if (!type || type === instance.props.type) {
            instance.handler.close();
        }
    }
}
messageTypes.forEach((type) => {
    message[type] = (options = {}, appContext) => {
        const normalized = normalizeOptions(options);
        return message({ ...normalized, type }, appContext);
    };
});
message.closeAll = closeAll;

message._context = null;
export default message as Message;
