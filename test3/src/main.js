import Vue from 'vue'
import App from './App.vue'
import router from './routes';

Vue.config.productionTip = true;

createApp({
    render: h => h(App)
    ,router
}).$mount('#app');
