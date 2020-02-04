import Vue from 'vue'
import App from './App.vue'

import * as firebase from 'firebase'

import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAB1Cc3CeL3s8Nb0PSHrbrdX_t7S9FlK0Q",
      authDomain: "gamecatalog-ec5e8.firebaseapp.com",
      databaseURL: "https://gamecatalog-ec5e8.firebaseio.com",
      projectId: "gamecatalog-ec5e8",
      storageBucket: "gamecatalog-ec5e8.appspot.com",
      messagingSenderId: "1017991459080",
      appId: "1:1017991459080:web:647850faf5fedd3a44fcbd",
      measurementId: "G-QHMGMBYR6W"
    })
  }
}).$mount('#app')
