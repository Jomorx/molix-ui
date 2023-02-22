# Alert 提示

Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。
Alert 组件提供五种类型，由 type 属性指定，默认值为 info
<ml-alert :type="type" style="margin-bottom:10px" v-for="type in typeList" @close="handleClose" :key="type" :title="type"></ml-alert>

<script setup>
    import { ref } from "vue"
    const alertRef = ref()
    const typeList = ref(["primary","danger","default","warning","info"])
    const handleClose = (e)=>{
        console.log(e)
    }
</script>
::: details code here
```vue:line-numbers
<script setup>
    const typeList = ["primary","danger","default","warning","success"]
</script>

<template>
    <ml-alert :type="type" v-for="type in typeList" @close="handleClose" :title="type"></ml-alert>
</template>
```
:::

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。 你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。
<ml-alert type="info" ref="alertRef" style="margin-bottom:10px" @close="handleClose"  title="info"></ml-alert>
<ml-alert type="danger" style="margin-bottom:10px" @close="handleClose" close-text="danger" title="danger"></ml-alert>
<ml-alert type="success" style="margin-bottom:10px" @close="handleClose"  title="success" :closeable="false"></ml-alert>
::: details code here
```vue:line-numbers
<template>
    <ml-alert type="info" @close="handleClose" title="info" close-text="info"></ml-alert>
    <ml-alert type="danger" @close="handleClose" title="danger" close-text="danger"></ml-alert>
</template>

```
:::


## 文字居中
使用 center 属性来让文字水平居中。

你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 closable 属性决定 Alert 组件是否可关闭， 该属性接受一个 Boolean，默认为 false。 你可以设置 close-text 属性来代替右侧的关闭图标， 需要注意的是 close-text 必须是一个字符串。 当 Alert 组件被关闭时会触发 close 事件。
<ml-alert :type="type" style="margin-bottom:10px" v-for="type in typeList" @close="handleClose" :title="type" center></ml-alert>


::: details code here
```vue:line-numbers
<script setup>
    const typeList = ["primary","danger","default","warning","success"]
</script>
<template>
    <ml-alert :type="type" style="margin-bottom:10px" v-for="type in typeList" @close="handleClose" :title="type" center></ml-alert>
</template>

```
:::

## 文字描述
为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。
<ml-alert :type="type" style="margin-bottom:10px" v-for="type in typeList" @close="handleClose" :title="type">
    这个类型是{{type}}
</ml-alert>


::: details code here
```vue:line-numbers
<script setup>
    const typeList = ["primary","danger","default","warning","success"]
</script>
<template>
    <ml-alert :type="type" v-for="type in typeList" @close="handleClose" :title="type">
        这个类型是{{type}}
    </ml-alert>
</template>
```
:::