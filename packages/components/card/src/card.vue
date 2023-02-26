<template>
    <div :class="containerCls" ref="cardRef" :style="bodyStyle">a</div>
</template>

<script setup lang="ts">
import { useNamespace } from "@molix/hooks";
import { computed, onBeforeMount, onMounted, ref, watch, StyleValue, CSSProperties } from "vue";
import { ShadowTiming } from "./card";

const props = withDefaults(defineProps<ICardProps>(), {
    header: "Card Title",
    bodyStyle: "",
    shadow: ShadowTiming.always,
});

const cardRef = ref();
const nsCard = useNamespace("card");

const containerCls = [nsCard.block()];
</script>

<script lang="ts">
interface ICardProps {
    header?: string;
    bodyStyle?: StyleValue;
    shadow?: ShadowTiming;
}
export default {
    name: "MlCard",
};
</script>
<style lang="scss" scoped>
@use "../../../theme/src/card.scss";
@use "../../../theme/src/var.scss";
</style>
