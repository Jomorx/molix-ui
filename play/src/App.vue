<template>
    <MlRate :max="10" v-model="rate" show-score></MlRate>
    <MlInput placeholder="输入一下罢"></MlInput>
    <ElInput></ElInput>
    <MlButton @click="handleInfoClick" round fall size="small">啊啊</MlButton>
    <MlAlert>asdasdasd</MlAlert>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import { MlMessage } from "@molix/components";
import { ElMessage } from "element-plus";
const rate = ref(0);
const { appContext } = getCurrentInstance()!;
const handleInfoClick = () => {
    MlMessage.success(
        {
            message: "{{rate}}",
        },
        appContext
    );
    // ElMessage.success({
    //     message: "{{rate}}",
    // });
};
</script>

<style scoped>
.ml-input {
    margin: 10px 0px;
}
</style>
