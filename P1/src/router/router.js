import { createRouter, createWebHashHistory } from 'vue-router';

import Homepage from '../components/Homepage.vue';
import Counter from '../components/Counter.vue';
import Decider from '../components/Decider.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/Counter', component: Counter },
  { path: '/Decider', component: Decider },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(), //createWebHashHistory adds /#/ on our url
  routes, // short for `routes: routes`
})

export default router;