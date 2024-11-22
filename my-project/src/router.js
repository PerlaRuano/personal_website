import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Portfolio from './components/Portfolio.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld, // Home page
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio, // Portfolio page
    },
  ],
});

