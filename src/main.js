import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';
import router from './router';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.mount('#app');

// const $toast = useToast();
// let instance = app.$toast.success('I did it');