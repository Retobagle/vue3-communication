<template>
  <div class="child1">
    <h1>孙子组件</h1>
    <p>{{car}}</p>
    <button @click="updateCardata">更新数据</button>
  </div>
</template>

<script setup lang="ts">
import {inject} from 'vue';
import type { Ref } from 'vue'
//注入祖先组件提供数据
//需要参数:即为祖先提供数据的key
let car = inject<Ref<string>>('TOKEN');
let updateCar = inject<(value: string) => void>('updateCar');
const updateCardata = ()=>{
   car!.value = '自行车';
  // updateCar?.('自行车');    // 该语法等同于updateCar && updateCar('自行车')
}
</script>

<style scoped>
.child1 {
  width: 200px;
  height: 200px;
  background: red;
}
</style>