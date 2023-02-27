<template>
    <div :class="containerCls">
        <div :class="wrapperCls">
            <input
                ref="InputRef"
                :class="nsInput.element('inner')"
                v-bind="attrs"
                :type="
                    !props.showPassword || (props.showPassword && pwdVisible) ? 'text' : 'password'
                "
                :disabled="disabled"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                @input="handleInput"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
            />
            <!-- suffix slot -->
            <span v-if="suffixVisible" :class="nsInput.element('suffix')">
                <span :class="nsInput.element('suffix-inner')">
                    <i
                        v-if="showClear"
                        :class="[nsInput.element('icon'), nsInput.element('clear')]"
                        class="iconfont icon-qingchu"
                        @click="clear"
                    ></i>
                    <i
                        v-if="showPwdVisible"
                        :class="[nsInput.element('icon'), nsInput.element('hidden-pwd'), pwdIcon]"
                        @click="handlePwdVisible"
                    ></i>
                    <span
                        v-if="isWordLimitVisible"
                        :class="[nsInput.element('icon'), nsInput.element('count')]"
                        @click="handlePwdVisible"
                        ><span :class="nsInput.element('count-inner')"
                            >{{ textLength }} / {{ attrs.maxlength }}</span
                        ></span
                    >
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from "vue";

import { useNamespace, useAttrs } from "@molix/hooks";

import { isNil } from "lodash";

import type { TargetElement } from "./input";

const InputRef = ref();
// input值保留
const nativeInputValue = computed(() => (isNil(props.modelValue) ? "" : String(props.modelValue)));

const props = withDefaults(defineProps<IInputProps>(), {
    modelValue: "",
    type: "text",
    disabled: false,
    placeholder: "",
    clearable: false,
    showPassword: false,
    showWordLimit: false,
    autocomplete: "off",
});
const emit = defineEmits<IInputEmits>();
const attrs = useAttrs();

// 构造css命名空间
const nsInput = useNamespace("input");

const containerCls = computed(() => [
    nsInput.block(),
    nsInput.is("disabled", props.disabled),
    nsInput.is("exceed", inputExceed.value),
]);
const wrapperCls = computed(() => [nsInput.element("wrapper")]);

const pwdIcon = computed(() => (pwdVisible.value ? "iconfont icon-chakan" : "iconfont icon-biyan"));

// 输入的文字长度
const textLength = computed(() => nativeInputValue.value.length);
const inputExceed = computed(
    () => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength)
);

const focused = ref(false);
// const hovering = ref(false);
const pwdVisible = ref(false);

// 展示一键清除
const showClear = computed(() => props.clearable && !props.disabled && !!nativeInputValue.value);
// 展示切换密码
const showPwdVisible = computed(
    () => props.showPassword && !props.disabled && !!nativeInputValue.value
);
const isWordLimitVisible = computed(
    () =>
        props.showWordLimit &&
        !!attrs.value.maxlength &&
        props.type === "text" &&
        !props.disabled &&
        !props.showPassword
);
// 是否展示后缀
const suffixVisible = computed(() => showClear.value || props.showPassword || props.showWordLimit);

watch(nativeInputValue, () => setNativeInputValue);

const handleInput = (event: Event) => {
    let { value } = event.target as TargetElement;
    emit("update:modelValue", value);
    emit("input", value);
};

const handleChange = (event: Event) => {
    emit("change", (event.target as TargetElement).value);
};

const handleFocus = (event: FocusEvent) => {
    focused.value = true;
    emit("focus", event);
};

const handleBlur = (event: FocusEvent) => {
    focused.value = false;
    emit("blur", event);
};
const handlePwdVisible = () => {
    pwdVisible.value = !pwdVisible.value;
    focus();
};
const setNativeInputValue = () => {
    const input = InputRef.value;
    if (!input || input.value === nativeInputValue.value) return;
    input.value = nativeInputValue.value;
};

const focus = async () => {
    await nextTick();
    InputRef.value?.focus();
};
const select = () => {
    InputRef.value?.select();
};
const blur = () => InputRef.value?.blur();
const clear = () => {
    InputRef.value.value = "";
    emit("update:modelValue", "");
    emit("change", "");
    emit("clear");
    emit("input", "");
    focus();
};

defineExpose({ input: InputRef, clear, blur, select });
</script>

<script lang="ts">
interface IInputProps {
    modelValue?: string | number | null | undefined;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
    clearable?: boolean;
    showPassword?: boolean;
    showWordLimit?: boolean;
    autocomplete?: string;
    form?: string;
}
interface IInputEmits {
    (e: "update:modelValue", value: string): void;
    (e: "input", value: string): void;
    (e: "change", value: string): void;
    (e: "focus", evt: FocusEvent): void;
    (e: "blur", evt: FocusEvent): void;
    (e: "clear"): void;
}
export default {
    name: "MlInput",
};
</script>

<style lang="scss" scoped>
@use "../../../theme/src/input.scss";
@use "../../../theme/src/var.scss";
</style>
