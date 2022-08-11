import { defineStore } from "pinia";

/**
 * 传入2个参数，定义仓库并导出
 * 第一个参数为不可重复，字符串类型，作为仓库id以区分仓库
 * 第二个参数，以对象形式配置仓库的state，getters,actons
 */

export const mainStore =defineStore('main',{
  //state 类似组件的data选项，函数形式返回对象
  state:()=>{
    return {
      msg:'hello world!',
      counter:0
    }
  },
  getters:{
    //是只读属性  不能修改
    count(state){
      return state.counter
    },
    dcount():number{
      return this.count+1
    }
    //还可以使用this访问整个store实例 ， 但是需要定义返回类型（在 TypeScript 中）
  },
  actions:{
    increment(){
      this.counter++
    }
  },
})