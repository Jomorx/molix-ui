import { MessageOptions, MessageParams } from "./message";

// const normalizeOptions = (params?: MessageParams) => {
//     const options: MessageOptions =
//         !params || isString(params) || isVNode(params) || isFunction(params)
//             ? { message: params }
//             : params;

//     const normalized = {
//         ...messageDefaults,
//         ...options,
//     };

//     if (!normalized.appendTo) {
//         normalized.appendTo = document.body;
//     } else if (isString(normalized.appendTo)) {
//         let appendTo = document.querySelector<HTMLElement>(normalized.appendTo);

//         // should fallback to default value with a warning
//         if (!isElement(appendTo)) {
//             debugWarn(
//                 "ElMessage",
//                 "the appendTo option is not an HTMLElement. Falling back to document.body."
//             );
//             appendTo = document.body;
//         }

//         normalized.appendTo = appendTo;
//     }

//     return normalized as MessageParamsNormalized;
// };
export {};
