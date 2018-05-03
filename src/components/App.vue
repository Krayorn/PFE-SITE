<template>
<div id="app">

    <home ref='home' ></home>
    <concept ref='concept' ></concept>
    <partner ref='partner' ></partner>
    <contact ref='contact' ></contact>
    <div class='nav' >
        <div v-bind:class="{'active': scroll < homeHeight}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > homeHeight && scroll < conceptHeight}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > conceptHeight && scroll < partnerHeight}" >{{scroll}}</div>
        <div v-bind:class="{'active': scroll > partnerHeight && scroll < contactHeight}" >{{scroll}}</div>
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
                homeHeight: 0,
                conceptHeight: 0,
                partnerHeight: 0,
                contactHeight: 0
            }
        },
        methods: {
            getWindowScroll(event) {
                this.scroll = window.scrollY
            },
            getHeight() {
                this.homeHeight = this.$refs.home.$refs.home.clientHeight
                this.conceptHeight = this.homeHeight + this.$refs.concept.$refs.concept.clientHeight
                this.partnerHeight = this.conceptHeight + this.$refs.partner.$refs.partner.clientHeight
                this.contactHeight = this.partnerHeight + this.$refs.contact.$refs.contact.clientHeight
            }
        },
        mounted() {
            this.$nextTick(function() {
                window.addEventListener('scroll', this.getWindowScroll)
                this.getWindowScroll()
            }),
            this.getHeight();
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
