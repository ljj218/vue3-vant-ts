import { App } from "vue";
import { Button ,Rate,Toast   } from 'vant';


let arr=[Button ,Rate ,Toast]
export const setVantPlugin=(app:App)=>{
  arr.forEach(item=>{
    app.use(item)
  })
  app.config.globalProperties.$toast=Toast
}