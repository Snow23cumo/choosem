import Vue from 'vue'
import App from './App.vue'

/**inportar el vue-router */
import VueRouter from 'vue-router';
/**vuelidate */
import Vuelidate from 'vuelidate';
/**moment */
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
/**importar los componentes */
import LastMultimedias from './components/LastMultimedias.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Multimedia from './components/Multimedia.vue';
import AllMultimedia from './components/AllMultimedia.vue';
import About from './components/About';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);
/**fecha */
Vue.use(VueMoment,{
  moment
});
/**Definir las rutas */

const routes = [
  {path:'/home', component: LastMultimedias},
  {path:'/about', component: About},
  {path:'/ultimos-multimedias', component: LastMultimedias},
  {path:'/buscador/:searchString',component:Search},
  {path:'/redirect/:searchString',component:Redirect},
  {path:'/multimedia/:id',name:'multimedia',component:Multimedia},
  {path:'/all-multimedia',name:'all',component:AllMultimedia},
  {path:'/', component: LastMultimedias},
  {path:'/*',component: ErrorComponent},
  
];
/**objeto router */
const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

