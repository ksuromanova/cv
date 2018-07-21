import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		siteSkills: [
			{
				name: 'Vue.js: vuex, routers'
			},
			{
				name: 'Node.js, NPM'
			},
			{
				name: 'WebPack'
			},
			{
				name: 'Bootstrap 4, Font-Awersome'
			},
			{
				name: 'SASS/SCSS, CSS'
			},
			{
				name: 'HTML'
			}
		]
	},
	getters: {
		siteSkills(state){
			return state.siteSkills;
		}
	}
};