import { createApp } from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//new Vue({  router,  store,  render: h => h(App),}).$mount('#app')
createApp(App).use(router).use(store).mount('#app')