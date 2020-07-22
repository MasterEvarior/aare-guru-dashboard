import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRandomColor from 'vue-randomcolor';

Vue.use(VueRandomColor)
Vue.config.productionTip = false
Vue.prototype.$appName = "aare-guru-dashboard";
Vue.prototype.$appVersion = "1.0";
Vue.prototype.$apiBaseUrl = "https://aareguru.existenz.ch/v2018";

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
