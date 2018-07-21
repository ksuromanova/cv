import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		menu: [
			{
				title: 'Home',
				class: 'fa fa-home',
				url: '/home'
			},
			{
				title: 'About',
				class: 'fa fa-user',
				url: '/about'
			},
			{
				title: 'Skills',
				class: 'fa fa-key',
				url: '/skills'
			},
			{
				title: 'Form',
				class: 'fa fa-envelope-o',
				url: '/form'
			}
		],
		social: [			
			{
				title: 'Viber',
				class: 'fa fa-whatsapp',
				url: 'viber://chat?number=+380684243997'
			},
			{
				title: 'Skype',
				class: 'fa fa-skype',
				url: 'skype:+380684243997?call'
			},
			{
				title: 'GitHub',
				class: 'fa fa-github',
				url: 'https://github.com/ksuromanova/cv.git'
			}
		]
	},
	getters: {
		menu(state){
			return state.menu;
		},
		social(state){
			return state.social;
		}
	}
};