<script lang="ts">
interface IButtonProps {
    //按钮类型
    type?: "primary" | "error" | "info" | "success";
    disabled?: true | false;
    round?: true | false;
}
interface IButtonEmits {
    (e: "click", event: MouseEvent): any;
}
export default {
    name: "ml-button",
};
</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<IButtonProps>(), {
    type: "primary",
    disabled: false,
    round: false,
});
const emit = defineEmits<IButtonEmits>();
const handleClick = (e: MouseEvent) => {
    emit("click", e);
};
</script>

<template>
    <button @click="handleClick" :class="{ btn: true, [type]: true, round }" :disabled="disabled">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
@import "../../../theme/src/button.scss";
</style>
