import Vue from 'vue'
import User from './App.vue'
// import path from 'path'
// import { a } from './Test.js'
// import { XButton } from 'vux'
// import { Actionsheet } from 'vux'
// import { Button } from 'element-ui'
// Vue.component(Button.name, Button)
// Vue.component('my-app', { template: '<button>test</button>' })
// const componentA = {
//     template: '<button>test</button>'
// }
// console.log(a)
console.log(User)
// window.addEventListener('load', function() {
// new Vue({
//     el: '#app',
//     // render: 
//     render: function(h) {
//         return h(App)
//     }
// })
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

new Vue({
    el: '#app',
    // render: h => h(User)
    render: h => h(User)
    // render: h => h('div', 'Hello World!')
    // components: {
    //     'my-app': App
    // }
    // template: '<my-app/>'
})
// console.log(Button.name);

// new Vue({
//     el: '#app',
//     render: function(createElement){
//     	return createElement('my-app')
//     }
//     // template: '<App/>',
//     // components: { App }
// })
// })

// function component() {
//     var element = document.createElement('div')
//     element.id = 'app'
//     return element
// }

// document.body.appendChild(component())