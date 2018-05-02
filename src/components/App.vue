<template>
<div id="app">

    <home></home>
    <concept></concept>
    <partner></partner>
    <contact></contact>
    <div class='nav' >
        <div v-bind:class="{'active': scroll > 0 && scroll < 500}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > 500 && scroll < 1000}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > 1000 && scroll < 1500}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > 1500 && scroll < 2000}" >{{scroll}}</div>
    </div>
</div>
</template>

<script>
    import Home from '../components/home.vue';
    import Concept from '../components/concept.vue';
    import Partner from '../components/partner.vue';
    import Contact from '../components/contact.vue';

    export default {
        name: 'app',
        data: () => {
            return{
                scroll: 0,
            }
        },
        methods: {
            getWindowScroll(event) {
                this.scroll = window.scrollY
            }
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('scroll', this.getWindowScroll)
                this.getWindowScroll()
            })
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.getWindowScroll)
        },
        components : {
            Home,
            Concept,
            Partner,
            Contact
        },
    }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
    .nav {
        position: fixed;
        right: 0%;
        top: 40%;
        height: 20%;
    }
    .active {
        transition: 1.5s;
        background-color: red;
    }
</style>
