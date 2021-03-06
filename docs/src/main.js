// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('./assets/font-awesome.css');
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.config.productionTip = false

import PDatePicker from '../../src/components/PDatePicker.vue';
//import PDatePicker from 'vue2-persian-datepicker';
Vue.component('pdatepicker', PDatePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
