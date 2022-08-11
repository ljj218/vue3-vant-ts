import Vue from 'vue'
const storage = {
  install (Vue) {
    Vue.prototype.$storage = {
      set: (key, value) => {
        const tempObj = {
          data: value,
          time: new Date().getTime()
        }
        localStorage.setItem(key, JSON.stringify(tempObj))
      },
      get: (key) => {
        const tempObj = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : ''
        return tempObj?.data || ''
      },
      remove: (key) => {
        localStorage.removeItem(key)
      }
    }
  }
}
Vue.use(storage)
