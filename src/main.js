import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: () => import('./components/Home.vue'),
            props: {
                headline: 'Lost control of your finances?',
                uvp: 'Gain control of your loans, mortgages, stocks, and other financials with our calculators',
                cta: 'Get Started',
                url: "/#"
            }
        }
    ]
})


createApp(App)
    .use(router)
    .mount('#app')

