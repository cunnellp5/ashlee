// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueParticles from 'vue-particles';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueParticles);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
