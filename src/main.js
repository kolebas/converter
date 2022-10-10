import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useStore } from "@/stores/Store";

const pinia = createPinia()
const app = createApp(App).use(router)

app.use(pinia)
const storeValutes = useStore();
storeValutes.getData();
storeValutes.getTerms();
app.mount('#app')
