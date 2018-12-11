import Vue from 'vue'
import App from './App.vue'
import path from 'path'
// import { XButton } from 'vux'
// import { Actionsheet } from 'vux'
// import { XButton } from 'vux'

// Vue.component('x-button', XButton)s
// window.addEventListener('load', function() {
// new Vue({
//     el: '#app',
//     // render: 
//     render: function(h) {
//         return h(App)
//     }
// })

new Vue({
    el: '#app',
    // render: h => h(App)
    template: '<App/>',
    components: { App }
})

// })

// function component() {
//     var element = document.createElement('div')
//     element.id = 'app'
//     return element
// }

// document.body.appendChild(component())