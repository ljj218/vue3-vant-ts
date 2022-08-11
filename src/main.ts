import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'reset-css'
import {setVantPlugin} from "@/plugins/VantJs"
import {createPinia}  from 'pinia'
import 'vant/lib/index.css'
const app =createApp(App);
//引用vant插件
setVantPlugin(app)

const pinia =createPinia()
app.use(pinia).use(router).mount('#app')
