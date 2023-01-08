import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/style/style.scss'
import router from './router'

const app = createApp(App).use(router);
app.use(store);
app.mount('#app');