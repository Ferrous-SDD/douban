// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'axios';
import store from '@/store/store';
import Header from '@/components/header';
import Loading from '@/components/loading';

Vue.config.productionTip = false

Vue.component(Header.name,Header);
Vue.component(Loading.name,Loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
