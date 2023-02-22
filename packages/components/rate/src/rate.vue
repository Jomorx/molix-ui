<template>
    <div :class="containerCls" @mouseleave="resetValue">
        <span
            v-for="(item, key) in max"
            :key="key"
            :class="itemCls"
            @mousemove="setValue(item, $event)"
            @click="confirmValue"
            ><i
                :class="[
                    nsRate.element('icon'),
                    nsRate.is(
                        'active',
                        allowHalf
                            ? item - currentValue == 0.5 || item <= currentValue
                            : item <= currentValue
                    ),
                ]"
                ><svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${svgIcon(item)}`"></use></svg></i
        ></span>
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed, ref } from "vue";
import { hasClass } from "@molix/utils";
const props = withDefaults(defineProps<IRateProps>(), {
    modelValue: 0,
    max: 5,
    allowHalf: false,
});
const emit = defineEmits<IInputEmits>();

const nsRate = useNamespace("rate");

const containerCls = computed(() => [nsRate.block()]);
const itemCls = computed(() => [nsRate.element("item")]);
const iconCls = computed(() => [nsRate.element("icon")]);

// 当前选中的star的index
const currentValue = ref<number>(0);
const hoverIndex = ref<number>(0);
// 根据各项属性得出当前应应用哪个svg
const svgIcon = computed(() => (item: number) => {
    if (item <= currentValue.value) return "star-full";
    else if (item - currentValue.value === 0.5) return "star-half";
    return item <= hoverIndex.value ? "star-full" : "star";
});
// 设置值
const setValue = (item: number, e: MouseEvent) => {
    if (props.allowHalf) {
        let target = e.target as HTMLElement;
        // 转化到item
        if (!hasClass(target, "icon") && !hasClass(target, nsRate.element("item"))) {
            target = target.parentNode?.parentNode?.parentNode as HTMLElement;
        }
        if (hasClass(target, "icon")) target = target.parentNode?.parentNode as HTMLElement;
        if (hasClass(target, nsRate.element("icon"))) target = target.parentNode as HTMLElement;
        if (hasClass(target, nsRate.element("item"))) {
            let width = target.clientWidth;
            let offsetLeft = width - e.offsetX;
            if (offsetLeft * 2 >= width) {
                currentValue.value = item - 0.5;
            } else {
                currentValue.value = item;
            }
        }
    } else {
        currentValue.value = item;
    }
    hoverIndex.value = item;
};
// 重置值
const resetValue = () => {
    hoverIndex.value = 0;
    currentValue.value = props.modelValue;
};
// 确认值
const confirmValue = () => {
    emit("update:modelValue", currentValue.value);
};
</script>

<script lang="ts">
interface IRateProps {
    modelValue?: number;
    max?: number;
    allowHalf?: boolean;
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
