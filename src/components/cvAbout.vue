<template>
	<div class="row">
		<div class="col-12 col-md-4 animated slideInUp">					
				<ul class="infoBorder">
        		<li 
        			v-for="(itemInfo, index) in info" 
		            :key="index">
            		<div class="infoBorder-badge" :class="itemInfo.iconStatus"><i :class="itemInfo.iconClass"></i></div>
                	<div class="infoBorder-panel">
		                    <div class="infoBorder-heading">
		                        <h5 class="infoBorder-title"><u>{{ itemInfo.title }}</u></h5> 
		                    </div>		                
		                <div class="infoBorder-body">		                	
							<ul>
								<li v-for="(itemList, index) in itemInfo.list"
									:key="index">{{itemList}}								
								</li>
							</ul>
		                </div>
                	</div>                	     
        		</li>
    		</ul>  
			</div>
			<div class="col-12 col-md-4 text-center animated slideInDown">
				<h2>Romanova Ksenia</h2>
				<img class="col-8 col-md-8 mb-2 img-fluid rounded" src="/img/prof.jpg" alt="placeholder+image">
			<div class="text-justify">
				<h6>Age:<em> {{contacts.age}}</em></h6>
				<h6>Phone:<em v-for="ph in contacts.phone">{{ph}}<br></em></h6>
				<h6>Email: <em>{{contacts.email}}</em></h6>				
				<h5><u>Objective:</u> I would like to get a position of front-end web developer to practiсe my skills and knowledge of web develop.</h5>
				
			</div>
			</div>		
		<div class="col-12 col-md-4 animated slideInUp">			 
    		<ul class="timeline">
        		<li class="timeline-inverted"
        			v-for="(itemTime, index) in timeline" 
		            :key="index">
            		<div class="timeline-badge" :class="itemTime.iconStatus"><i :class="itemTime.iconClass"></i></div>
                	<div class="timeline-panel">		                    
		                        <h5>{{ itemTime.title }}</h5>                       
		                        <small class="text-muted">{{ itemTime.created }}</small>
		                		<div>{{ itemTime.body }}</div>
                	</div>                	     
        		</li>
    		</ul>  	      
		</div>
	</div>
</template>

<script>

import {mapGetters} from 'vuex';
  export default {
    computed: {
	      ...mapGetters('about', {
	        timeline: 'timeline',
	        contacts: 'contacts',
	        info: 'info'
	      })
      }
  }
</script>