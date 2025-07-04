import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from '@ionic/vue-router'
import { menuController } from '@ionic/vue'
import Home from '@/views/Home.vue'
import Counter from '@/views/Counter.vue'

const routes: RouteRecordRaw[] = [
  { path: '/',      name: 'Home',  component: Home  },
  { path: '/counter/:id', name: 'Counter', component: Counter, props: true },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach(async () => {
  await menuController.close()
})

export default router
