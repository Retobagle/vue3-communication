<template>
  <div class="child">
    <h3>钱数:{{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>
</template>

<script setup lang="ts">
//接受props
let props = defineProps(["modelValue"]);
let $emit = defineEmits(['update:modelValue']);
//子组件内部按钮的点击回调
const handler = ()=>{
   //触发自定义事件          vue3中，相当于把v-model和.sync语法合二为一，更加灵活，v-model:属性名='value'，可以自定义传递的标签属性的名称，相应的事件也会变化
   $emit('update:modelValue',props.modelValue+1000);
}
</script>

<style scoped>
.child {
  width: 600px;
  height: 300px;
  background: skyblue;
}
</style>