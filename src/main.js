import Vue from 'vue'
import App from './App.vue'
import { makeServer } from './server'
import DrVueEcharts from 'dr-vue-echarts';
import VueRouter from 'vue-router';
import Home from './view/Home.vue'
import Reports from './view/Reports.vue'
import Users from './view/Users.vue'


Vue.use(DrVueEcharts)
Vue.config.productionTip = false
Vue.use(VueRouter);

//All routes
const routes = [
    { path: '/', redirect: 'Home' },
    { path: '/home', name: 'Home', component: Home},
    { path: '/reports', name: 'Reports & Insights', component: Reports},
    { path: '/users', name: 'Users', component: Users }
];

const router = new VueRouter({ routes, mode: 'history' });

if (process.env.NODE_ENV === "development") makeServer()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
