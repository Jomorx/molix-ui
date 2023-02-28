<template>
    <div :class="containerCls" @mouseleave="resetValue" ref="rateRef">
        <span
            v-for="(item, key) in max"
            :key="key"
            :class="itemCls"
            @mousemove="setValue(item, $event)"
            @click="confirmValue"
            ><i :class="[nsRate.element('icon'), nsRate.is('active', isActive(item))]"
                ><svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${svgIcon(item)}`"></use></svg
            ></i>
        </span>
        <span :class="nsRate.element('score')" v-if="showScore" name="score">{{
            scoreTemp()
        }}</span>
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed, onMounted, ref, watch } from "vue";
import { hasClass, debugWarn, getCssVarName } from "@molix/utils";
import { useCssVar } from "@vueuse/core";
import { isInteger } from "lodash-es";

const props = withDefaults(defineProps<IRateProps>(), {
    unWarn: false,
    modelValue: 0,
    size: "medium",
    max: 5,
    allowHalf: false,
    clearable: false,
    readonly: false,
    showScore: false,
    scoreTemplate: "{value} 星",
});
const emit = defineEmits<IInputEmits>();

const nsRate = useNamespace("rate");
const rateRef = ref();

const containerCls = computed(() => [nsRate.block(), nsRate.is("disabled", props.readonly)]);
const itemCls = computed(() => [nsRate.element("item")]);
// const iconCls = computed(() => [nsRate.element("icon")]);

// 当前选中的star的index
const currentValue = ref<number>(0);
const oldValue = ref<number>(0);
const hoverIndex = ref<number>(0);
// 根据各项属性得出当前应应用哪个svg
const svgIcon = computed(() => (item: number) => {
    // 若为只读则icon取决于modelValue
    const tempValue = props.readonly ? formatScore.value : currentValue.value;
    if (item <= tempValue) return "star-full";
    else if (item - tempValue === 0.5) return "star-half";
    return item <= hoverIndex.value ? "star-full" : "star";
});
// 计算item是否处于active
const isActive = computed(() => (item: number) => {
    if (props.readonly) {
        return item - formatScore.value == 0.5 || item <= formatScore.value;
    }
    return props.allowHalf
        ? item - currentValue.value == 0.5 || item <= currentValue.value
        : item <= currentValue.value;
});
// 将modelValue取整0.5
const formatScore = computed(() => Math.floor(props.modelValue * 2) / 2);
const scoreTemp = computed(() => () => {
    let temp = props.scoreTemplate;
    return temp.replace("{value}", `${Math.floor(props.modelValue * 2) / 2}`);
});
// 设置值
const setValue = (item: number, e: MouseEvent) => {
    // 若只读则直接返回
    if (props.readonly) return;
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
// 清空值
const clearValue = () => {
    hoverIndex.value = 0;
    currentValue.value = 0;
    oldValue.value = 0;
};
// 确认值

const confirmValue = (payload: MouseEvent | null, access?: boolean) => {
    if (props.readonly && !access) return;
    if (props.clearable) {
        // 新旧值相等意味着清空，否则旧值设置为当前值
        if (oldValue.value === currentValue.value) {
            clearValue();
        } else oldValue.value = currentValue.value;
    }
    emit("update:modelValue", currentValue.value);
    emit("change", currentValue.value);
};

// 验证 modelValue 的正确性
const validateModelValue = () => {
    const value = props.modelValue;
    // 监测传入value是否大于max
    if (props.max < value && !props.unWarn) {
        debugWarn(
            "rate",
            `传入的 value 为${value}，大于设置的 max ${props.max}，已将传入参数设置为最大值。`
        );
        currentValue.value = props.max;
        confirmValue(null, true);
    }
};
// 设置组件尺寸
const setSize = () => {
    const marginVar = getCssVarName(nsRate.cssVarName(`rate-margin-${props.size}`));
    const sizeVar = getCssVarName(nsRate.cssVarName(`rate-size-${props.size}`));
    const marginCss = useCssVar(nsRate.cssVarName("rate-icon-margin"), rateRef);
    const sizeCss = useCssVar(nsRate.cssVarName("rate-icon-size"), rateRef);
    marginCss.value = marginVar;
    sizeCss.value = sizeVar;
};
watch(
    () => props.modelValue,
    (val) => {
        currentValue.value = val;
    }
);
if (!isInteger(props.modelValue) && !props.allowHalf) {
    currentValue.value = Math.floor(props.modelValue);
    emit("update:modelValue", currentValue.value);
}

onMounted(() => {
    // 若有modelValue则赋初值
    currentValue.value = props.modelValue;
    oldValue.value = props.modelValue;
    validateModelValue();
    setSize();
});

defineExpose({ resetValue });
</script>

<script lang="ts">
interface IRateProps {
    modelValue?: number;
    max?: number;
    allowHalf?: boolean;
    clearable?: boolean;
    readonly?: boolean;
    showScore?: boolean;
    scoreTemplate?: string;
    unWarn?: boolean;
    size?: "small" | "medium" | "large";
}
interface IInputEmits {
    (e: "update:modelValue", value: number): void;
    (e: "change", value: number): void;
}
export default {
    name: "MlRate",
};
</script>
<style lang="scss" scoped>
@use "../../../theme/src/rate.scss";
@use "../../../theme/src/var.scss";
</style>
