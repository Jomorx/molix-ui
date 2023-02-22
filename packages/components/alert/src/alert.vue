<script lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed } from "vue";
interface IAlertProps {
    type?: "primary" | "error" | "info" | "success" | "text" | "default";
}
export default {
    name: "ml-alert",
};
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<IAlertProps>(), {
    type: "default",
});
const ns = useNamespace("alert");
const altWrapper = computed(() => [ns.block(), ns.modifier(props.type)]);
</script>

<template>
    <transition :name="ns.block('fade')">
        <div :class="altWrapper" style="background-color: red">这是alert</div>
    </transition>
</template>
