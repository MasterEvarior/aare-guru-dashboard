import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$appName = "aare-guru-dashboard";
Vue.prototype.$appVersion = "0.1";
Vue.prototype.$apiBaseUrl = "https://aareguru.existenz.ch/v2018";

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
