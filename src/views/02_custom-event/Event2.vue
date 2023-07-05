<template>
  <div class="child">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件xxx</button>
    <!-- <button @click="$emit('click','AK47','J20')">点击我触发自定义事件click</button> -->
    <button @click="handleClick(1, 2)">点击我触发自定义事件click</button>
  </div>
</template>

<script setup lang="ts">
//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用        （传入一个数组，内部声明有哪些自定义事件）
/* let $emits = defineEmits(['xxx','click']);
//按钮点击回调
const handler = (event: MouseEvent) => {
  //第一个参数:事件类型 第二个|三个|N参数即为注入数据
    // $emits('xxx','东风导弹','航母');
    $emits('xxx', event)
}; */

// 简单说法： 未来第一个实参数据必须是'click'字符串
// 完整说法： 临时声明一个click数据类型，注意该类型只有字符串'click'满足要求，第一个实参的数据类型必须满足类型'click'的要求
// ts写法     （通过泛型+接口来告知vue，有哪些自定义事件，并对其传参进行约束）
// vue3新特性，如果一个组件标签上具有绑定事件的语法@click="回调函数",如果该组件有用defineEmits声明接收该事件，他就是自定义事件，否则默认是原生事件，自动绑定在根节点身上
interface Emits {
  (event: 'xxx', data: MouseEvent): void;
  (event: 'click', v1: number, v2: number): void;
}
const emits = defineEmits<Emits>();
const handler = (event: MouseEvent) => {
  emits('xxx', event);
}
const handleClick = (v1: number, v2: number) => {
  emits('click', v1, v2);
}

</script>

<style scoped>
.child {
  width: 400px;
  height: 200px;
  background: pink;
}
</style>