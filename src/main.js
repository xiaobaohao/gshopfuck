import Vue from 'vue'
import App from "./App.vue"
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './base.css'

Vue.component(Button.name,Button)

window.addEventListener('touchmove', e => e.preventDefault())

new Vue({
    el:'#app',
    render:h=>h(App),
    router,
    store
})