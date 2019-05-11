import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Input from './InputBindding.vue'

import VueResource from 'vue-resource'

import VueRouter from 'vue-router'

import Routers from './Route/router.js'

Vue.use(VueResource);

Vue.use(VueI18n)

Vue.use(VueRouter);

const i18n = new VueI18n({
  locale:'en', // 设置语言 
  messages: {
    en: { hello: 'hi there', bye: 'see you later', wait: 'just a minute', buttonText: 'Change to Chinese Locale' },
      cn: { hello: '你好', bye: '再见', wait: '稍等一下', buttonText: '更改为英文场景' }
  }
})

const router = new VueRouter({
	routes :  Routers,
	mode : 'history'
});
// Vue.filter('to_uppercase',function(value) {
// 		return value.toUpperCase()
// })

export const bus = new Vue(); 
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  i18n
})
// new Vue({
//   el: '#input-binding',
//   render: h => h(Input)
// })
