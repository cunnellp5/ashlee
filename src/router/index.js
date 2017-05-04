import Vue from 'vue';
import Router from 'vue-router';
import contact from '@/components/contact';
import gallery from '@/components/gallery';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery,
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});