<template>
    <MlRate :max="10" v-model="rate" show-score></MlRate>
    <MlInput placeholder="输入一下罢"></MlInput>
    <ElInput></ElInput>
</template>
<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
const rate = ref(0);
</script>

<style scoped>
.ml-input {
    margin: 10px 0px;
}
</style>
