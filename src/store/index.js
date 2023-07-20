import Vuex from 'vuex';
import authModule from './modules/auth';
import createPersistedState from 'vuex-persistedstate';

const dataState = createPersistedState({
    paths: ['auth.token']
})

const store = new Vuex.Store({
    modules: {
       auth: authModule,
    },
    plugins: [dataState],
})

export default store;