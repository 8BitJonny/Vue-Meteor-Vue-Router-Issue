// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// Main app
import App from './App.vue';
import App2 from './App2';
import App3 from './App3';
const routes = [
  {
    path: '/app2', name: 'App2', component: App2
  },
  {
    path: '/app3', name: 'App3', component: App3
  }
]

const router = new VueRouter({
  routes
})

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/dist/vuetify.min.js'

Vue.use(Vuetify)

Meteor.startup(() => {
  new Vue({
    el: 'app',
    router,
    replace: false,
    components: {
      App
    }
  });
});
