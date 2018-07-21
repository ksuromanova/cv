<template>	
     <div class="row text-white">     	
         <div class="col-12 col-md-8 align-self-center animated slideInLeft">         	
			<h1 class="mb-3">
					Hi,<br/>
					I`m Ksu,<br/>
					junior front-end developer.					
				</h1>
			<h3>Dear {{hrName}},</h3>
			<p>This letter is for express my interest in your posting vacancy for an Front-End Developer. </p>		
			<p>I create this CV website for demonstration my technical skills. It have information about all main aspect my personal and professional data.	<br>
			I can be reached anytime via my contact!</p>
			<p>Thank you for your time and consideration. I look forward to talking with you about this opportunity.</p>
			<p>Sincerely, Ksenia Romanova</p>							
		</div>		
		<div class="col-12 col-md-4 my-2 align-self-center animated slideInUp">			
			<form class="p-4 ">
				<div class="form-row">					
					<div class="form-group col-12">
						<label for="pNum" class="text-pink">Please, enter your Name!</label>
						<input type="text" class="form-control myInput"
						v-model="hrName" maxlength="20"					
						/>						
					</div>
				</div>
			</form>
		</div>	
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  	data(){
  		return {
  			hrName: 'HR Manager'
  		}
  	},
    computed: {
	      ...mapGetters('navs', {
	        menu: 'menu'
	      })
      }
  }
</script>