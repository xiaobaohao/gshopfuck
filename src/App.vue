<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
    mounted() {
        this.getAddress()
        this.$store.dispatch('getUserInfo')
    },
    methods: {
        ...mapActions(['getAddress'])
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
        position relative
</style>