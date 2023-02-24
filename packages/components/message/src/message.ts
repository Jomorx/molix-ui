import { Mutable } from "@molix/utils";
import { AppContext } from "vue";
import { IMessageProps } from "./message.vue";

export interface MessageHandler {
    close: () => void;
}
export type MessageOptions = Partial<
    Mutable<
        Omit<IMessageProps, "id"> & {
            appendTo?: HTMLElement | string;
        }
    >
>;
export const messageDefaults = {
    type: "info",
    center: false,
    showClose: false,
    customClass: "",
    dangerouslyUseHTMLString: false,
    message: "",
    id: "",
    offset: 20,
    zIndex: 2000,
    duration: 3000,
    onBeforeClose: () => {},
    onAfterClose: () => {},
};
export type MessageParams = MessageOptions | MessageOptions["message"];
export type MessageParamsNormalized = Omit<IMessageProps, "id"> & {
    appendTo: HTMLElement;
};
export type IMessageType = IMessageProps["type"];
export type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
    closeAll(type?: IMessageType): void;
};
export type MessageOptionsWithType = Omit<MessageOptions, "type">;

export type MessageParamsWithType = MessageOptionsWithType | MessageOptions["message"];

export type MessageTypedFn = (
    options?: MessageParamsWithType,
    appContext?: null | AppContext
) => MessageHandler;
export interface Message extends MessageFn {
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
