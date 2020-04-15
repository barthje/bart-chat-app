import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome';
import Chat from '../views/Chat';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    props: true,
    beforeEnter: (to, from, next) => {
      if (!to.params.name) {
        next({ name: 'welcome' });
      }

      next(true);
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Welcome,
    beforeEnter(routeTo, routeFrom, next) {
      next({ name: 'welcome' });
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
