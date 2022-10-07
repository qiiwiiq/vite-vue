import { createApp } from 'vue'
import './css/index.css'
import store from './store/store'
import App from './App.vue'

const app = createApp(App).use(store)

app.mount('#app')

