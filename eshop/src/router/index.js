import { createRouter, createWebHistory } from 'vue-router'
import eCatalog from '../components/e-catalog.vue'
import eCart from '../components/e-cart.vue'

const routes = [{
        path: '/',
        name: 'catalog',
        component: eCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: eCart,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router