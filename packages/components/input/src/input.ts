export const inputEmits = {
    ["update:modelValue"]: (value: string) => value,
    input: (value: string) => value,
    change: (value: string) => value,
    focus: (evt: FocusEvent) => evt instanceof FocusEvent,
    blur: (evt: FocusEvent) => evt instanceof FocusEvent,
    clear: () => true,
    mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
    mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
    keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
    compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
    compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
    compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
};

export type TargetElement = HTMLInputElement | HTMLTextAreaElement;
