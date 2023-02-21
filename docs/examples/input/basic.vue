<template>
    <ml-input v-model="input" placeholder="输入一下罢" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
