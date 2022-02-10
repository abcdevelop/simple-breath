import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


export const eventBus = new Vue()


/* 
import './registerServiceWorker'

// SERVICE WORKER //
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    // navigator.serviceWorker.register('/service-worker.js').then(() => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => {
        console.log('Service Worker registered');
      });
  });
}
 */

export let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired')
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
  return false
});


import VueApexCharts from 'vue-apexcharts'

import './registerServiceWorker'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


Vue.config.productionTip = false

export const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


