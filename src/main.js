import Vue from 'vue';
import App from './App.vue';

import {store} from './store';
import {router} from './routes.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:8080'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCDdTj4F1GnceZeFXZPmstKcFRnK95ZsSY",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})