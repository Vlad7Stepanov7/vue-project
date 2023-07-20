import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';
import router from './router';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import Vuex from 'vuex';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.use(Vuex);
app.use(store);
app.mount('#app');

