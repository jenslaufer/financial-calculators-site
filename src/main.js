import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./components/Home.vue'),
            props: {
                headline: 'Welcome to Your Financial Calculators Site',
                uvp: 'Use our tools to get your finances right'
            }
        }
    ]
})


createApp(App)
    .use(router)
    .mount('#app')

