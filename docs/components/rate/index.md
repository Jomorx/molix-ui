<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(0);
const rate2 = ref(0);
const rate3 = ref(0);
const rate4 = ref(0);
const rate5 = ref(0);
const rate6 = ref(0);
const rate7 = ref(0);
const rate8 = ref(0);
const rate9 = ref(8.5);


</script>

# Rate 评分

用于评分
## 基础用法

通过 `max` 控制星星数量。
::: warning
当 `v-model` 绑定的响应式数据初始值大于 `max` 给定值时，组件内部会自动将该数据的值设置为 `max` 的数值并抛出警告，如果想禁用这一功能请在组件添加 `un-warn` 属性，注意，添加后无法保证数据以及组件表现的正确性。
:::
<ml-rate :max='5' v-model='rate' show-score></ml-rate>

::: details code here

```vue:line-numbers
<template>
    <ml-rate :max='5' v-model='rate'></ml-rate>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(0);
</script>
```
:::

## 组件尺寸
允许通过 `size` 属性控制组件大小。
<div style='display:flex;flex-direction: column;'>
    <ml-rate :max='5' v-model='rate2' size='small' style='margin-bottom:10px;'></ml-rate>
    <ml-rate :max='5' v-model='rate3' size='medium' style='margin-bottom:10px;'></ml-rate>
    <ml-rate :max='5' v-model='rate4' size='large'></ml-rate>
</div>

::: details code here

```vue:line-numbers
<template>
    <div style='display:flex;flex-direction: column;'>
        <ml-rate :max='5' v-model='rate1' size='small'></ml-rate>
        <ml-rate :max='5' v-model='rate2' size='medium'></ml-rate>
        <ml-rate :max='5' v-model='rate3' size='large'></ml-rate>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate1 = ref(0);
const rate2 = ref(0);
const rate3 = ref(0);
</script>
```
:::

## 允许半星

通过 `allow-half` 控制是否出现半星。
<ml-rate :max='10' v-model='rate5' allow-half></ml-rate>

::: details code here

```vue:line-numbers
<template>
    <ml-rate :max='10' v-model='rate' allow-half></ml-rate>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(0);
</script>
```
:::



## 可重置

添加 `clearable` 属性后，点击相同的值可将值重置为`0`。
<div style='display:flex;align-items:center'>
全星：<ml-rate :max='10' v-model='rate6' clearable></ml-rate>
</div>
<div style='display:flex;align-items:center'>
半星： <ml-rate :max='10' v-model='rate7' allow-half clearable></ml-rate>
</div>

::: details code here

```vue:line-numbers
<template>
    <div style='display:flex;align-items:center'>
        全星：<ml-rate :max='10' v-model='rate1' clearable></ml-rate>
    </div>
    <div style='display:flex;align-items:center'>
        半星： <ml-rate :max='10' v-model='rate2' allow-half clearable></ml-rate>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate1 = ref(0);
const rate2 = ref(0);
</script>
```
:::


## 展示星数

通过 `show-score` 控制是否展示星数，并且可以根据 `score-template` 的值来规定字展示的格式，其中 `{value}` 将被替换为星数。
<ml-rate :max='10' v-model='rate8' show-score score-template="{value} 颗星星"></ml-rate>

::: details code here

```vue:line-numbers
<template>
    <ml-rate :max='10' v-model='rate' show-score score-template="{value} 颗星星"></ml-rate>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(4.5);
</script>
```
:::

## 只读

通过 `readonly` 控制是否是只读。
<ml-rate :max='10' v-model='rate9' show-score readonly></ml-rate>

::: details code here

```vue:line-numbers
<template>
    <ml-rate :max='10' v-model='rate' show-score readonly></ml-rate>

</template>

<script lang="ts" setup>
import { ref } from "vue";
const rate = ref(8.5);
</script>
```
:::