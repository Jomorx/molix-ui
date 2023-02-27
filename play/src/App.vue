<template>
    <MlRate :max="10" v-model="rate" show-score></MlRate>
    <MlInput v-model="input" placeholder="输入一下罢"></MlInput>
    <ElInput></ElInput>
    <MlButton @click="handleInfoClick" round fall size="small">啊啊</MlButton>
    <MlAlert>asdasdasd</MlAlert>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { MlMessage } from "@molix/components";
const input = ref("");
const rate = ref(0);
const handleInfoClick = () => {
    MlMessage({
        message: "this is a message.",
        type: "info",
    });
};
</script>

<style scoped>
.ml-input {
    margin: 10px;
}
</style>
