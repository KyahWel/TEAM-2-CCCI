import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index.vue'
import About from '../pages/about.vue'
import Academic from '../pages/academic.vue'
import Projects from '../pages/projects.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/academic', component: Academic },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({
  routes
})

export default router