<script lang="ts" setup>
const props = defineProps<{
    color: string;
}>();
</script>

<template>
    <button :style="{ color, ...$attrs }">
        <slot />
    </button>
</template>
<script lang="ts">
export default {
    name: "ml-button",
};
</script>
