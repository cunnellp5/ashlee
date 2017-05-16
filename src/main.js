// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueParticles from 'vue-particles';
import 'vuetify/dist/vuetify.min.css';
import axios from 'axios';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueParticles);
Vue.use(axios);

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://ashleemac.herokuapp.com/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
