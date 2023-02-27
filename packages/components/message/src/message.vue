<script lang="ts">
import { useNamespace } from "@molix/hooks";
import { EVENT_CODE } from "@molix/constants";
import { computed, CSSProperties, onMounted, ref, VNode } from "vue";
import { getLastOffset, getOffsetOrSpace } from "./instance";
import { useEventListener, useResizeObserver, useTimeoutFn } from "@vueuse/core";
export default {
    name: "ml-message",
};
export interface IMessageProps {
    type?: "primary" | "error" | "info" | "success" | "warning" | "default";
    center?: boolean;
    showClose?: boolean;
    customClass?: string;
    dangerouslyUseHTMLString?: boolean;
    message?: string | VNode | (() => VNode);
    id?: string;
    offset?: number;
    zIndex?: number;
    duration?: number;
    onBeforeClose: () => void;
    onAfterClose: () => void;
    onClose: () => void;
}
export interface IMessageEmits {
    (name: "close"): void;
}
</script>
<script setup lang="ts">
defineEmits<IMessageEmits>();
const props = withDefaults(defineProps<IMessageProps>(), {
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
});
const visible = ref(true);
const height = ref(0);
let stopTimer: (() => void) | undefined = undefined;
const messageRef = ref<HTMLDivElement>();

const lastOffset = computed(() => getLastOffset(props.id));
const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
const customStyle = computed<CSSProperties>(() => ({
    top: `${offset.value}px`,
    zIndex: props.zIndex,
}));
const ns = useNamespace("message");
//关闭visible
const close = () => {
    visible.value = false;
};
const keydownListener = (e: KeyboardEvent) => {
    if (e.code === EVENT_CODE.esc) {
        close();
    }
};
const bottom = computed((): number => height.value + offset.value);

useEventListener(document, "keydown", keydownListener);
const handleClearTimer = () => {
    stopTimer?.();
};
const handleStartTimer = () => {
    if (props.duration === 0) return;
    ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
    }, props.duration));
};

onMounted(() => {
    handleStartTimer();
    visible.value = true;
});
useResizeObserver(messageRef, () => {
    height.value = messageRef.value!.getBoundingClientRect().height;
});

defineExpose({
    visible,
    bottom,
    close,
});
</script>

<template>
    <transition :name="ns.block('fade')" @before-leave="onClose" @after-leave="onAfterClose">
        <div
            v-if="visible"
            :id="id"
            ref="messageRef"
            :class="[
                ns.block(),
                { [ns.modifier(type)]: type },
                ns.is('center', center),
                ns.is('closable', showClose),
                customClass,
            ]"
            :style="customStyle"
            role="alert"
            @mouseenter="handleClearTimer"
            @mouseleave="handleStartTimer"
        >
            <slot>
                <p v-if="!dangerouslyUseHTMLString" :class="ns.element('content')">
                    {{ message }}
                </p>
                <p v-else :class="ns.element('content')" v-html="message" />
            </slot>
        </div>
    </transition>
</template>
