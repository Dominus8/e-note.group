import { createRouter, createWebHistory } from 'vue-router'
import eCatalog from '../components/e-catalog.vue'
import eCart from '../components/e-cart.vue'
import eSelect from '../components/e-select.vue'

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
    },
    {
        path: '/select',
        name: 'eselect',
        component: eSelect
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router