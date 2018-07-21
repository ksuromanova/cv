import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import navs from './modules/navs';
import home from './modules/home';
import about from './modules/about';

export const store = new Vuex.Store({
	modules: {
		navs,
		home,
		about		
	},
	strict: process.env.NODE_ENV !== 'production'
});