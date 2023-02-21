<template>
    <div>
        <div :class="wrapperCls">
            <input
                ref="input"
                :class="nsInput.element('inner')"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                @input="handleInput"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

import { useNamespace } from "@molix/hooks";

import type { TargetElement } from "./input";

const props = withDefaults(defineProps<IInputProps>(), {
    modelValue: "",
    type: "text",
    disabled: false,
    placeholder: "",
});
const emit = defineEmits<IInputEmits>();

// 构造css命名空间
const nsInput = useNamespace("input");

const wrapperCls = computed(() => [
    nsInput.element("wrapper"),
    nsInput.is("disabled", props.disabled),
]);

const focused = ref(false);
const hovering = ref(false);

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

// watch(() => {});
</script>

<script lang="ts">
interface IInputProps {
    modelValue?: string | number | null | undefined;
    type?: string;
    disabled?: boolean;
    placeholder?: string;
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
@import "../../../theme/src/input.scss";
</style>
