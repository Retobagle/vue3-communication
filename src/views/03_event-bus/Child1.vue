<template>
  <div class="child1">
    <h3>我是子组件1:曹植</h3>
  </div>
</template>

<script setup lang="ts">
import $bus from "../../bus";
//组合式API函数
import { onMounted } from "vue";
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => {
  //第一个参数:即为事件类型  第二个参数:即为事件回调
/*   $bus.on("car", (car) => {
    console.log(car);
  }); */

  // 如果回调写在外面的话，则bus那边需要用类型别名
  const logMsg = (data: object) => {
    console.log(data);
  }
  $bus.on('car', logMsg)
});
</script>

<style scoped>
.child1 {
  width: 300px;
  height: 300px;
  background: hotpink;
}
</style>