<template>
    <div :class="containerCls">
        <span
            v-for="(item, key) in max"
            :key="key"
            :class="itemCls"
            @mousemove="setValue"
            @mouseleave="resetValue"
            @click="confirmValue"
            >1</span
        >
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed } from "vue";

const props = withDefaults(defineProps<IRateProps>(), {
    modelValue: 0,
    max: 5,
});

const nsRate = useNamespace("rate");

const containerCls = computed(() => [nsRate.block()]);
const itemCls = computed(() => [nsRate.element("item")]);

// 设置值
const setValue = () => {};
// 重置值
const resetValue = () => {};
// 确认值
const confirmValue = () => {};
</script>

<script lang="ts">
interface IRateProps {
    modelValue?: number;
    max?: number;
}
interface IInputEmits {
    (e: "update:modelValue", value: number): void;
}
export default {
    name: "MlRate",
};
</script>
<style lang="scss" scoped>
@use "../../../theme/src/rate.scss";
@use "../../../theme/src/var.scss";
</style>
