
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { routes } from './index.routes.ts'


const app = createApp(App)

app.use(createPinia())
app.use(routes)
app.mount('#app')
