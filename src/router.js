import Foo from './pages/Foo.vue';
import Bar from './pages/Bar.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from './pages/HomePage.vue';
import Apartment from './pages/Apartment.vue';
import ErrorPage from './pages/ErrorPage.vue';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration.vue';

const routes = [
    {
        path: '/',
        component: Homepage,
        name: 'homepage'
    },
    {
        path: '/foo',
        component: Foo
    },
    {
        path: '/bar',
        component: Bar
    },
    {
        path: '/apartment/:id',
        component: Apartment,
        name: 'apartment'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login-page'
    },
    {
        path: '/registration',
        component: RegistrationPage,
        name: 'registration-page'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes
});

export default router;