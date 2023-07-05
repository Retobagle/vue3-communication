<template>
  <div class="box">
    <h1>props:我是父组件曹操</h1>
    <hr />
    <h2>count值: {{ count }}</h2>
    <Child info="我是曹操" :money="money" :updateCount="updateCount"></Child>
  </div>
</template>

<script setup lang="ts">
//props:可以实现父子组件通信,props数据还是只读的！！！
import Child from "./Child.vue";   // Vue3 setup中引入的文件内容，可以直接在template中使用
import { ref } from "vue";
// let money = ref<number>(10000);
let money = ref(10000);
let count = ref<number>(0);

// 函数作用域跟声明位置有关，跟调用位置无关
const updateCount = (num: number) => {
  count.value += num;
}
</script>

<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background: yellowgreen;
}
</style>