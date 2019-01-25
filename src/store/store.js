import Vue from 'vue';
import Vuex from 'vuex';
import home from './pages/home';
import status from './pages/status';

Vue.use(Vuex);
let actions = {
    /*destroy({
        dispatch
    }) {
        dispatch('home/destory');
        dispatch('status/destory');
    }*/
};
export default new Vuex.Store({
    actions,
    modules: {
        home,
        status,
    }
})