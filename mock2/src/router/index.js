import Vue from 'vue'
import Router from 'vue-router'
import news from '@/components/news.vue'
import dailies from '@/components/dailies.vue'
import zalent from '@/components/zalent.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/news',
    name: 'news',
    component: news
  }, {
    path: '/dailies',
    name: 'dailies',
    component: dailies
  }, {
    path: '/zalent',
    name: 'zalent',
    component: zalent
  }]
})
