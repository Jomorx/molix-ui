<script lang="ts">
import { useNamespace } from "@molix/hooks";
import { ref, computed } from "vue";
interface IButtonEmits {
    (e: "click", event: MouseEvent): any;
}
interface IButtonProps {
    //按钮类型
    type?: "primary" | "error" | "info" | "success" | "text" | "default";
    disabled?: true | false;
    round?: true | false;
    fall?: true | false;
    size?: "large" | "medium" | "small";
}

export default {
    name: "MlButton",
};
</script>

<script lang="ts" setup>
const NSbutton = useNamespace("button");
const isWaveActive = ref(false);
const props = withDefaults(defineProps<IButtonProps>(), {
    type: "primary",
    disabled: false,
    round: false,
    fall: false,
    size: "medium",
});

const emit = defineEmits<IButtonEmits>();
//点击事件
const handleClick = (e: MouseEvent) => {
    emit("click", e);
    isWaveActive.value = true;
    setTimeout(() => {
        isWaveActive.value = false;
    }, 300);
};
//button类名
const btnCls = computed(() => [
    NSbutton.element("btn"),
    NSbutton.is("round", props.round),
    NSbutton.is("disabled", props.disabled),
]);
const wrapperCls = computed(() => [
    NSbutton.element("wrapper"),
    NSbutton.is("fall", props.fall),
    NSbutton.modifier(props.type),
    NSbutton.modifier(props.size),
]);

const waveCls = computed(() => [
    NSbutton.element("wave"),
    NSbutton.is(`${props.type}-wave-active`, isWaveActive.value),
]);
</script>

<template>
    <button @click="handleClick" :class="btnCls" :disabled="disabled">
        <div :class="wrapperCls">
            <slot />
        </div>
        <div :class="waveCls"></div>
    </button>
</template>

<style lang="scss" scoped>
@import "../../../theme/src/button.scss";
@import "../../../theme/src/reset.scss";
</style>
