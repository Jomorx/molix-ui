import { Mutable, mutable } from "@molix/utils";
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
export type MessageParams = MessageOptions | MessageOptions["message"];
