
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { routes } from './index.routes.ts'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'


const app = createApp(App)

app.use(createPinia())
app.use(routes)
app.use(Toast)
app.mount('#app')
