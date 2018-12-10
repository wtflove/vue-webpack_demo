import Vue from 'vue'
import App from './App.vue'
import { Actionsheet } from 'vux'

window.addEventListener('load', function() {
    new Vue({
        el: '#app',
        render: function(h) { return h(App) }
    })
})

// function component() {
//     var element = document.createElement('div')
//     element.id = 'app'
//     return element
// }

// document.body.appendChild(component())