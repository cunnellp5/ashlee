import Vue from 'vue';
import Router from 'vue-router';
import contact from '@/components/contact';
import gallery from '@/components/gallery';
import Hello from '@/components/Hello';
import thankyou from '@/components/thankyou';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
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
      path: '/thankyou',
      name: 'thankyou',
      component: thankyou,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  mode: 'history',
});
