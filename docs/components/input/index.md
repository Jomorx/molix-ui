# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<ml-input v-model="input" placeholder="输入一下罢" />
您的输入:{{input}}
<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>

::: details code here

```vue:line-numbers
<template>
    <ml-input v-model="input" placeholder="输入一下罢" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件
<ml-input v-model="input" placeholder="输入一下罢" disabled/>

::: details code here

```vue:line-numbers
<template>
    <ml-input v-model="input" placeholder="输入一下罢" disabled/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

:::
