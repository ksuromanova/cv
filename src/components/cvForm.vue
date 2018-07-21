<template>
<div class="row">
		<div class="col-12 col-md-5">
      <transition enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  mode="out-in"
                  name="home">
			<form class="animated fadeInLeft text-uppercase px-5 py-4"
      @submit.prevent="submitForm" v-show="showForm">
      <h4 class="text-center">Contact form</h4>
      <small class="text-muted">This form demonstration send axios POST request to Test Server</small>
        <div class="progress my-3">
          <div class="progress-bar" :style="progressWidth"></div>
        </div>
        <div class="form-row">
          <div class="form-group col-12" v-for="(item, index) in  inputs">
            <label>{{item.name}}</label>
            <transition enter-acvive-class="animated bounceInDown"
                        leave-active-class="animated bounceOutDown">
                <i class="fa" :class="controls[index].error ? 'fa-exclamation-circle animated wobble' : 'fa-check-circle pink animated bounce'" 
                  v-if="controls[index].activated">
                  </i>
            </transition>
            <input type="text" class="form-control myInput"
                    :value="item.value"
                    @input="onInput(index, $event.target.value)">
          </div>
          <div class="form-group col-12 text-center">
            <button class="btn btn-pink text-uppercase"  :disabled="done<inputs.length">Submit</button>
          </div>
        </div>
        </form>
      </transition>       
	   </div>
    <div class="col-12 col-md-7 mb-3 animated slideInUp">    
      <gmap-map
      :center="center"      
      :zoom="5"
      style="width:100%;  height: 530px;"
      :options="mapStyles"      
    >
      <gmap-marker
        :key="index"        
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </div>
    </div>    
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
    inputs: [
      {
            name: 'Company',
            value: '',
            pattern: /^[a-zA-Zа-яА-Я\s]{3,20}$/
          },
          {
            name: 'Phone',
            value: '',
            pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
          },
          {
            name: 'Email',
            value: '',
            pattern: /^[^@]+@[^@.]+\.[^@]+$/
          }
    ],
    showForm: true,
    controls: [],
    center: { 
      lat: 49.1335781,
      lng: 31.0422027
       },
    markers: [
        {
          position: {
            lat: 47.271618,
             lng: 34.654577
           }
        }
    ],  
    mapStyles: {    
    styles:  
    [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
  }
}
},
    beforeMount(){
      for (let i = 0; i < this.inputs.length; i++) {
        this.controls.push({
          error: !this.inputs[i].pattern.test(this.inputs[i].value),
          activated: this.inputs[i].value != ''
        })
      }
    },    
    computed: {
      done(){
        let done = 0;
        for (let i = 0; i < this.controls.length; i++) {
          if (!this.controls[i].error) {
            done++;
          }
        }
        return done;
      },
      progressWidth(){
        return {
          width: (this.done / this.inputs.length * 100)+'%'
        }
      }
    },
    methods: {
      onInput(index, value){
        let data = this.inputs[index];
        let control = this.controls[index];

        data.value = value;
        control.error = !data.pattern.test(value);
        control.activated = true;
      },
      submitForm(){
        var vm = axios.post('http://www.mocky.io/v2/5b51e89e2e00006d065c1b3f',
              this.inputs).then(function(response) {
        console.log(response); 
        alert('Запрос ушел на сервер!'+ JSON.stringify(response, null, 4));
        location.reload()        
    })
    .catch(function(error) {
        console.log(error);
        alert('Ошибка отправки запроса!');
    });        
        }     
    }  
}
</script>
