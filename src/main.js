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
                headline: 'Bring Precision to Your Loans, Investments, and Financial Affairs',
                uvp: 'Use our suite of financial calculators to make informed decisions with ease and accuracy.',
            }
        }
    ]
})


createApp(App)
    .use(router)
    .mount('#app')

