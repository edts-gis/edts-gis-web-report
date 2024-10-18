import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import 'flowbite'

import App from './App.vue'
import IndomarcoPizzaReportPage from '@/pages/reports/IndomarcoPizzaReportPage.vue'
import ConvenienceBrandStoreReportPage from '@/pages/reports/ConvenienceBrandStoreReportPage.vue'
import HomePage from '@/pages/HomePage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/reports/indomarco-pizza', component: IndomarcoPizzaReportPage},
        {path: '/reports/convenience-brand-store', component: ConvenienceBrandStoreReportPage}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
