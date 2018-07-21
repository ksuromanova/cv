import Vue from 'vue';
export default {
	namespaced: true,
	state: {
		contacts: {
				age: 22,
				phone: [
					'+38(068)-424-3997',
					'+38(099)-364-5919'
				],
				email: 'romanova.ksu15@gmail.com'
			},
		info: [            
            {
                id: 3,
                iconClass: 'fa fa-language',  
                iconStatus: '',              
                title: 'Languages',
                list: [
                		'UA - C2',
                		'RU - C2',
                		'EN - B1'
					]
            },
            {
                id: 2,
                iconClass: 'fa fa-smile-o',  
                iconStatus: 'pink-3',              
                title: 'Personal Skills',
                list: [
					'Analytical',
					'Attentive',
					'Disciplined',
					'Hardworking',
					'Responsible'
				]
            },
            {
                id: 1,
                iconClass: '',
                iconStatus: 'white',
                title: 'Hobbies and Interest',
                list: [
					'Layouts',
					'Math'
				]  
            }
        ],		
		timeline: [            
            {
                id: 3,
                iconClass: 'fa fa-briefcase',
                iconStatus: '',
                title: 'Work in Insure.Travel',               
                created: '01.08.2017 - nowadays',
                body: 'Remote work for a position Content-management /Layouts /Analytics'
            },
            {
                id: 2,
                iconClass: 'fa fa-graduation-cap',
                iconStatus: 'pink-3',
                title: 'Zaporizhzhya National University is finished',
                created: '01.09.2013 - 31.06.2017',
                body: 'Bachelor`s diploma with honours. Program Subject Area: Software engineering.'
            },
            {
                id: 1,
                iconClass: '',
                iconStatus: 'white',
                title: 'Velikobilozerskaya School №1 is finished',
                created: '01.09.2002 - 31.05.2013',
                body: 'Certificate of Secondary Education with honours.'
            }
        ]
	},
	getters: {
		contacts(state){
			return state.contacts;
		},
		timeline(state){
			return state.timeline;
		},
		info(state){
			return state.info;
		}
	}
};