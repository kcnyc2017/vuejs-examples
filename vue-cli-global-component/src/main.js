import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';
import Home2 from './Home2.vue';


Vue.component('ru-name', Home);
Vue.component('ru-name2', Home2);

new Vue({
  el: '#app',
  render: h => h(App)
})
