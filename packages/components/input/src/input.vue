<template>
    <div>
        <input
            ref="input"
            :class="nsInput.b()"
            type="text"
            :disabled="disabled"
            :placeholder="placeholder"
            @input="handleInput"
            @change="handleChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { watch } from "vue";

import { useNamespace } from "@molix/hooks";

import type { TargetElement } from "./input";

const props = withDefaults(defineProps<IInputProps>(), {
    modelValue: "",
    type: "text",
    inputDisabled: false,
    placeholder: "",
});
const emit = defineEmits<IInputEmits>();

// 构造css命名空间
const nsInput = useNamespace("input");

const handleInput = (event: Event) => {
    let { value } = event.target as TargetElement;
    emit("update:modelValue", value);
    emit("input", value);
};

const handleChange = (event: Event) => {
    emit("change", (event.target as TargetElement).value);
    console.log("a");
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
