<script lang="ts">
import { useNamespace } from "@molix/hooks";
import { EVENT_CODE } from "@molix/constants";
import { computed, CSSProperties, onMounted, ref } from "vue";
import { getLastOffset, getOffsetOrSpace } from "./instance";
import { useEventListener, useResizeObserver, useTimeoutFn } from "@vueuse/core";
import { mutable } from "@molix/utils";
export default {
    name: "ml-message",
};
export interface IMessageProps {
    type?: "primary" | "error" | "info" | "success" | "warning" | "default";
    center?: boolean;
    showClose?: boolean;
    customClass?: string;
    dangerouslyUseHTMLString?: boolean;
    message?: string;
    id?: string;
    offset?: number;
    zIndex?: number;
    duration?: number;
    onBeforeClose: () => void;
    onAfterClose: () => void;
}
export interface IMessageEmits {
    (name: "close"): void;
}
</script>
<script setup lang="ts">
const emits = defineEmits<IMessageEmits>();
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
let stopTimer: (() => void) | undefined = undefined;
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
</script>

<template>
    <transition :name="ns.block('fade')" @before-leave="onBeforeClose" @after-leave="onAfterClose">
        <div
            v-show="visible"
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
                <!-- Caution here, message could've been compromised, never use user's input as message -->
                <p v-else :class="ns.element('content')" v-html="message" />
            </slot>
            <el-icon v-if="showClose" :class="ns.element('closeBtn')" @click.stop="close">
                <Close />
            </el-icon>
        </div>
    </transition>
</template>
