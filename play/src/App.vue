<template>
    <MlRate :max="10" v-model="rate" show-score></MlRate>
    <MlInput v-model="input" placeholder="输入一下罢"></MlInput>
    <ElInput></ElInput>
    <MlButton>啊啊</MlButton>
</template>
<script setup lang="ts">
import { MlButton } from "@molix/components";
import { ref } from "vue";
const input = ref("");
const rate = ref(0);
</script>

<style scoped>
.ml-input {
    margin: 10px;
}
</style>
