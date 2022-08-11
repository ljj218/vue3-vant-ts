import Vue from 'vue'
const session = {
  install (Vue) {
    Vue.prototype.$session = {
      set: (key, value) => {
        const tempObj = {
          data: value,
          time: new Date().getTime()
        }
        sessionStorage.setItem(key, JSON.stringify(tempObj))
      },
      get: (key) => {
        const tempObj = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : ''
        return tempObj?.data || ''
      },
      remove: (key) => {
        sessionStorage.removeItem(key)
      }
    }
  }
}
Vue.use(session)
