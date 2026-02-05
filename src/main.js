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
                headline: 'Get your financials in order...',
                uvp: 'Gain control of your loans, mortgages, stocks, and other financials with our calculators',
            }
        },
        {
            path: '/quota',
            component: () => import('./components/Quota.vue')
        },
    ]
})


createApp(App)
    .use(router)
    .mount('#app')

