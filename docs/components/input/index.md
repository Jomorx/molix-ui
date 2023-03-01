<script lang="ts" setup>
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<ml-input v-model="input1" placeholder="输入一下罢" />
您的输入:{{input1}}

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
<ml-input v-model="input1" placeholder="输入一下罢" disabled/>

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

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框
<ml-input v-model="input2" placeholder="输入一下罢" clearable/>
您的输入:{{input2}}

::: details code here

```vue:line-numbers
<template>
    <ml-input v-model="input" placeholder="输入一下罢" clearable/>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

:::

## 密码框

使用 `type = 'password'` 即可得到一个密码框,使用 `show-password` 属性即可切换显示隐藏密码

<form action=''>
<ml-input
    v-model="input3"
    type="password"
    placeholder="输入密码试试看~"
    show-password
    max=5
  />
</form>

::: details code here

```vue:line-numbers
<template>
    <ml-input
    v-model="input"
    type="password"
    placeholder="输入密码试试看~"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

:::

## 输入长度限制

使用 `maxlength` 属性, 来控制输入内容的最大字数。 "字符数"使用 JavaScript 字符串长度来衡量。允许通过设置 `show-word-limit` 为 `true` 来显示剩余字数。

<ml-input
    v-model="input4"
    placeholder="输入密码试试看~"
    maxlength="10"
    show-word-limit
  />

::: details code here

```vue:line-numbers
<template>
    <ml-input
    v-model="input"
    placeholder="输入密码试试看~"
    maxlength="10"
    show-word-limit
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const input = ref("");
</script>
```

:::
