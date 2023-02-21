<script lang="ts">
interface IButtonProps {
    //按钮类型
    type?: "primary" | "error" | "info" | "success" | "text";
    disabled?: true | false;
    round?: true | false;
    fall?: true | false;
}
interface IButtonEmits {
    (e: "click", event: MouseEvent): any;
}
export default {
    name: "ml-button",
};
</script>

<script lang="ts" setup>
import { useNamespace } from "@molix/hooks";
import { ref, computed } from "vue";
const NSbutton = useNamespace("button");
const wrapperCls = computed(() => [
    // NSbutton.element
]);
const isWaveActive = ref(false);
const props = withDefaults(defineProps<IButtonProps>(), {
    type: "primary",
    disabled: false,
    round: false,
    fall: false,
});
const emit = defineEmits<IButtonEmits>();
const handleClick = (e: MouseEvent) => {
    emit("click", e);
    isWaveActive.value = true;
    setTimeout(() => {
        isWaveActive.value = false;
    }, 600);
};
</script>

<template>
    <button @click="handleClick" class="btn" :class="{ round, disabled }" :disabled="disabled">
        <div
            v-if="type !== 'text'"
            :class="{
                fall,
                content: true,
                [type]: true,
            }"
        >
            <slot />
        </div>
        <div v-else :class="{ [type]: true, content: true }">
            <slot />
        </div>
        <div :class="{ 'button-wave': true, [`${type}-button-wave-active`]: isWaveActive }"></div>
    </button>
</template>

<style lang="scss" scoped>
@import "../../../theme/src/button.scss";
</style>
