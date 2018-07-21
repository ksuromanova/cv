import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import cvHome from './components/cvHome';
import cvAbout from './components/cvAbout';
import cvSkills from './components/cvSkills';
import cvForm from './components/cvForm';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'home'}
	},
	{
		name: 'home',
		path: '/home',
		component: cvHome		
	},
	{
		name: 'about',
		path: '/about',
		component: cvAbout
	},
	{
		name: 'skills',
		path: '/skills',
		component: cvSkills
	},
	{
		name: 'form',
		path: '/form',
		component: cvForm
	},
	{
		path: '*',
		redirect: {name: 'home'}
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});