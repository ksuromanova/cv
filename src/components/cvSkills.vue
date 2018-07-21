<template>
	<div class="container-fluid">
	<div class="row text-center">
		<div class="col-12">
			<h1 class="animated zoomIn">Professional skills</h1>
			<!--div class="form-group col-12 text-center">
				<button class="text-uppercase"
				:class="[{ 'btn btn-light': shuffleButtonActive === 0, 'btn btn-dark': shuffleButtonActive != 0 }]"
				type="button" @click="selectShuffleSpeed(0)">Slow</button>
				<button class="text-uppercase"
				:class="[{ 'btn btn-light': shuffleButtonActive === 1, 'btn btn-dark': shuffleButtonActive != 1 }]"
				type="button" @click="selectShuffleSpeed(1)">Medium</button>
				<button class="text-uppercase"
				:class="[{ 'btn btn-light': shuffleButtonActive === 2, 'btn btn-dark': shuffleButtonActive != 2 }]"
				type="button" @click="selectShuffleSpeed(2)">Fast</button>		      
		    </div-->	
		    <div class="form-group col-12 text-center animated shake">			     
			    <transition name="fade">
			    	<button class="btn btn-pink text-uppercase" type="button" @click="mix()">Mix skills list  <i class="fa fa-random"></i></button>
			    </transition>
			</div>
		</div>	
		</div>	
		<transition-group :name="shuffleSpeed" tag="div" class="row" >						
			<div class="col-6 col-md-3 p-2 animated tada"  v-for="(skill,index) in lists" :key="index">
				<div class="skills-list">{{ skill }}</div>
			</div>	
		</transition-group>			
	</div>	
</div>	
</template>
<style>
.shuffleSlow-move {
  transition: all 5s;
}

.shuffleMedium-move {
  transition: all 3s;
}

.shuffleFast-move {
  transition: all 1s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import _ from 'lodash';
  export default {  
   data(){
  		return {
  			shuffleSpeed: 'shuffleMedium',
  			shuffleButtonActive: 1,    					 
    		lists: [
			'Vue.js',
			'Node.js',
			'NPM, Git',
			'WebPack',
			'JavaScript',
			'JQuery',
			'Bootstrap 4',
			'Font-Awersome',
			'Animate.css',
			'SASS/SCSS',
			'CSS3',
			'HTML5',
			'Jade',
			'WordPress',
			'NetCat',
			'MySQL'			
		]   		
  		}
  	}, 
  	 methods: {
    	selectShuffleSpeed(n) {
		      this.shuffleButtonActive = n;
		      
		      if (n === 0) this.shuffleSpeed = 'shuffleSlow';
		      if (n === 1) this.shuffleSpeed = 'shuffleMedium';
		      if (n === 2) this.shuffleSpeed = 'shuffleFast';
		    },
    	mix(){ 	
      	this.lists = _.shuffle(this.lists)   
    	}
    }
  }
</script>	