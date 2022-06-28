import { createRouter, createWebHashHistory } from 'vue-router';

import Homepage from '@/pages/Homepage';
import Counter from '@/pages/Counter';
import Decider from '@/pages/Decider';
import GuessGame from '@/pages/GuessGame';
import characterPage from '@/layouts/pokemon/components/characterPage';
import NotFound from '@/pages/NotFound';

const routes = [
  { path: '/', component: Homepage },
  { path: '/Counter', component: Counter },
  { path: '/Decider', component: Decider },
  { path: '/GuessGame', component: GuessGame },
  { path: '/CharacterPage/:id', component: characterPage,
  props: (route) => {
    const id = Number(route.params.id);
    return isNaN(id) ? { id: 1 } : {id}
  }
},
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(), //createWebHashHistory adds /#/ on our url
  routes, // short for `routes: routes`
})

export default router;