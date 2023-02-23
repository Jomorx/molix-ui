<script lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed, ref, useSlots } from "vue";
interface IAlertProps {
    type?: "primary" | "error" | "info" | "success" | "text" | "default";
    center?: boolean;
    title?: string;
    isBoldTitle?: boolean;
    description?: string;
    closeable?: boolean;
    closeText?: string;
}
export default {
    name: "ml-alert",
};
</script>

<script setup lang="ts">
const ns = useNamespace("alert");
const slots = useSlots();
const visible = ref(true);
const props = withDefaults(defineProps<IAlertProps>(), {
    type: "default",
    center: false,
    title: "",
    isBoldTitle: false,
    description: "",
    closeable: true,
    closeText: "",
});
const emit = defineEmits<{
    (name: "close", e: MouseEvent): void;
}>();
defineExpose({
    visible,
});
// 触发close 设置visible=false
const handleClick = (e: MouseEvent) => {
    emit("close", e);
    visible.value = false;
};

const altWrapperCls = computed(() => [
    ns.block(),
    ns.modifier(props.type),
    ns.is("center", props.center),
]);
const altContentCls = computed(() => [ns.element("content"), ns.is("center", props.center)]);
const altTitleCls = computed(() => [ns.element("title"), isBoldTitle.value]);
// 当有description时显示boldTitle
const isBoldTitle = computed(() => ({
    [ns.is("bold")]: props.description || slots.default,
}));

const altDescCls = computed(() => [ns.element("description")]);
const closeBtnCls = computed(() => [
    ns.element("close-btn"),
    ns.is("customed", !!props.closeText.length),
    ns.is("closeable", props.closeable),
]);
</script>

<template>
    <Transition :name="ns.block('fade')">
        <div :class="altWrapperCls" v-if="visible" role="alert">
            <!-- <div>icon</div> -->
            <div :class="altContentCls">
                <!-- title -->
                <span v-if="title || $slots.title" :class="altTitleCls">
                    <slot name="title">{{ title }}</slot>
                </span>
                <!-- description -->
                <span v-if="description || $slots.default" :class="altDescCls">
                    <slot>{{ description }}</slot>
                </span>
                <!-- closeBtn -->
                <template v-if="closeable">
                    <div v-if="closeText" @click="handleClick" :class="closeBtnCls">
                        {{ closeText }}
                    </div>
                    <div v-else @click="handleClick" :class="closeBtnCls">
                        <i class="iconfont icon-qingchu"></i>
                    </div>
                </template>
            </div>
        </div>
    </Transition>
</template>
