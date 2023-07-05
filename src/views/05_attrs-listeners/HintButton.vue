<template>
  <div :title="title">
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script setup lang="ts">
//引入useAttrs方法:获取组件标签身上属性与事件   vue3的$attrs对象等于vue2中的$attrs+$listeners

// 模板中常见的预留关键字:$emit, $event, $attrs，不需要声明，在模板中可以直接使用

import { useAttrs } from "vue";
//此方法执行会返回一个对象
let $attrs = useAttrs();

//万一用props接受title
let props = defineProps(["title"]);
//props与useAttrs方法都可以获取父组件传递过来的属性与属性值
//但是props接受了useAttrs方法就获取不到了
console.log($attrs);
</script>

<style scoped>
</style>