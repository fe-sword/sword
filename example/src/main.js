import Vue from 'vue';
import App from './App.vue';
import router from './router';

import SwordUI from '../../src';
import '../../src/themes/src/components/index.scss';

Vue.config.productionTip = false;

Vue.use(SwordUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
