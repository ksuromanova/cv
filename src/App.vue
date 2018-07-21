<template>
<section>
      <div class="container-fluid">        
        <div class="row">
          <vue-particles></vue-particles>
          <div class="col-12 col-md-1 pl-0 menu animated fadeIn">
            <ul class="pl-0 menu-ul">
              <router-link v-for="(item, index) in menu"
                     :key="index"
                     :to="item.url"
                     tag="li"  
                     class="py-2 menu-ul-li"                   
                     active-class="active"
              >
                <a class="menu-ul-li-a"><i :class="item.class"></i></a>
              </router-link>
            </ul>           
            <ul class="pl-0 menu-ul social-ul" >          
              <li v-for="(soc, index) in social"
                     :key="index"
                     class="py-1 menu-ul-li"
              >
                <a class="menu-ul-li-a social-ul-li-a" :href="soc.url"><i :class="soc.class"></i></a></li>             
            </ul>
          </div>
          <div class="offset-12 col-12 offset-md-1 col-md-10 mt text-white">            
            <transition name="slide" mode="out-in">
              <router-view>
                
              </router-view>
            </transition>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters('navs', {
        menu: 'menu'
      }),
      ...mapGetters('navs', {
        social: 'social'
      })
    }
  }
</script>

