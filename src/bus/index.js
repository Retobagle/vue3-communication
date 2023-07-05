// 模块化特点： 无论这个模块被引入多少次，只会执行该代码一次
//引入mitt插件:mitt一个方法,方法执行会返回bus对象
// 相当于是以前Vue.prototype.$bus = new Vue(); 
import mitt from 'mitt';
/*
  mitt不接收接口，只要type，如果给接口就报错
*/
// interface Events = {
//   car: object;    
// }
export default mitt();
