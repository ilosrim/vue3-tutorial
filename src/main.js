import {
  createApp
} from 'vue'
import App from './02/App.vue'
import './index.css'
import './assets/tailwind.css'
import components from '@/02/components/UI'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')