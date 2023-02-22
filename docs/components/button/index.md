# Button 按钮

按钮用于开始一个即时操作。

## 基础用法

使用 type、round 来定义按钮的样式。

<script setup>
    const typeList = ["primary","danger","info","warning","success","default"]
    const btnSize = ["large","medium","small"]
</script>

<div :style="{ display : 'flex','flex-direction':'column'}">
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type">{{type}}</ml-button>
    </div>
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round>{{type}}</ml-button>
    </div>
        <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round fall>{{type}}</ml-button>
    </div>
</div>

::: details code here

```vue:line-numbers
<script setup>
    const typeList = ["primary","danger","info","warning","success","text"]
</script>

<template>
    <div :style="{ display : 'flex','flex-direction':'column'}">
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type">{{type}}</ml-button>
        </div>
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round>{{type}}</ml-button>
        </div>
            <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round fall>{{type}}</ml-button>
        </div>
    </div>
</template>

```

:::

## 禁用按钮

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

<div :style="{ display : 'flex','flex-direction':'column'}">
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" disabled>{{type}}</ml-button>
    </div>
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round disabled>{{type}}</ml-button>
    </div>
        <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round fall disabled>{{type}}</ml-button>
    </div>
</div>

::: details code here

```vue:line-numbers
<script setup>
    const typeList = ["primary","danger","info","warning","success","text"]
</script>

<template>
    <div :style="{ display : 'flex','flex-direction':'column'}">
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" disabled>{{type}}</ml-button>
        </div>
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round disabled>{{type}}</ml-button>
        </div>
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round fall disabled>{{type}}</ml-button>
        </div>
    </div>
</template>

```

:::

## 文字按钮

没有边框和背景色的按钮。

<div>
    <ml-button type="text" >Text</ml-button>
    <ml-button type="text" round>Text</ml-button>
    <ml-button type="text" disabled>Text</ml-button>
</div>

::: details code here

```vue:line-numbers
<template>
    <ml-button type="text" >Text</ml-button>
    <ml-button type="text" round>Text</ml-button>
    <ml-button type="text" disabled>Text</ml-button>
</template>

```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 large 和 small 两种值。

<div :style="{ display : 'flex','flex-direction':'column'}">
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="size in btnSize" :size="size" type="primary">Large</ml-button>
    </div>
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}" v-for="size in btnSize" :size="size" type="primary" round>Medium</ml-button>
    </div>
    <div :style="{'margin-bottom':'20px'}">
        <ml-button :style="{'margin-right':'10px'}"  v-for="size in btnSize" :size="size" type="primary" round fall>Small</ml-button>
    </div>
</div>

::: details code here

```vue:line-numbers
<script setup>
    const btnSize = ["large","medium","small"]
</script>

<template>
    <div :style="{ display : 'flex','flex-direction':'column'}">
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type">{{type}}</ml-button>
        </div>
        <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round>{{type}}</ml-button>
        </div>
            <div :style="{'margin-bottom':'20px'}">
            <ml-button :style="{'margin-right':'10px'}" v-for="type in typeList" :type="type" round fall>{{type}}</ml-button>
        </div>
    </div>
</template>

```

:::
