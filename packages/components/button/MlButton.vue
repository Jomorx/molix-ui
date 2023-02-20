<script lang="ts" setup>
const props = defineProps<{
    color: string;
}>();
</script>

<template>
    <button class="btn">
        <slot />
    </button>
</template>
<script lang="ts">
export default {
    name: "ml-button",
};
</script>
<style lang="scss" scoped>
.btn {
    text-transform: uppercase;
    font-size: 14px;
    width: 81px;
    height: 34px;
    line-height: 20px;
    border-radius: 10px;
    text-align: center;
    border: 3px solid #009688;
    display: inline-block;
    text-decoration: none;
    color: #009688;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    transition: 0.3s;
    &::after,
    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #009688;
        top: -100%;
        left: 0;
        transition: 0.3s;
        z-index: -1;
        opacity: 0.5;
    }
    &::after {
        opacity: 1;
        transition-delay: 0.2s;
    }
    &:hover {
        color: #fff;
    }
    &:hover::after,
    &:hover::before {
        color: red;
        top: 0px;
    }
}
</style>
