<template>
  <div class="son">
       <h1>我是子组件:曹植</h1>
       <!-- <p>{{props.info}}</p>
       <p>{{props.money}}</p> -->
      <!--props可以省略前面的名字--->
       <p>{{info}}</p>
       <p>{{money}}</p>
       <button @click="updateProps">修改props数据</button>
       <button @click="updateParent(6)">修改父组件数据</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
// 如果不打算在js代码中使用props的数据，就不需要接收defineProps的返回值，模板中可以直接使用props接收到的数据

// 接收props数据，两种方式：
// 第一种，通过实参告知需要接收的标签属性名

// let props = defineProps(['info','money', 'updateCount']); //数组|对象写法都可以

// 第二种：通过泛型+接口的形式来约束接收的数据

interface Props {
  info: string;
  money: number;
  updateCount: (value: number) => void; // 接收的函数需要传递一个参数，无返回值
}
const props =  defineProps<Props>()

//按钮点击的回调
const updateProps = ()=>{
  // console.log('props', props); Proxy对象
  // props.money+=10;  // props:只读的
}

const updateParent = (data: number)=>{
  let count = ref<number>(2);
  props.updateCount(data);
}
</script>

<style scoped>
.son{
  width: 400px;
  height: 200px;
  background: hotpink;
}
</style>