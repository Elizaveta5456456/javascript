import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import OrderSuccess from '../pages/OrderSuccess.vue'

const routes = [
  { path: '/javascript', component: Home },
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/order-success', component: OrderSuccess },
]

const router = createRouter({
  history: createWebHashHistory('/javascript/'),
  routes,
})

export default router
