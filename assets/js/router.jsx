import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Aboutus from './components/Aboutus'
import NotFound from './components/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: Aboutus
  },
  // {
  //   path: '*',
  //   name: 'NotFound',
  //   component: NotFound
  // },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router;



// import { createApp } from 'vue';
// import * as VueRouter from 'vue-router'
// import Home from './components/Home'
// import Aboutus from './components/Aboutus'

// // Vue.use(VueRouter);
// createApp().use(VueRouter)

// export default new VueRouter.createRouter({
//   history: VueRouter.createWebHistory(),
//   routes: [
//     { path: "/", component: Home },
//     { path: "/aboutus", component: Aboutus },
//     { path: "*", redirect: "/home" }
//   ]
// });


